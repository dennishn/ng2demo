import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Subscription} from 'rxjs/Subscription';
import {Subject} from 'rxjs/Subject';

import {Angular2Apollo, ApolloQueryObservable} from 'angular2-apollo';
import gql from 'graphql-tag';

const feedQuery = gql`
  query Feed($type: FeedType!, $offset: Int, $limit: Int) {
    feed(type: $type, offset: $offset, limit: $limit) {    
      repository {
        name
        full_name
        description
        html_url
        stargazers_count
        open_issues_count
        owner {
          avatar_url
        }
      }
    }
  }
`;

@Component({
    selector: 'app-github-list',
    templateUrl: './github-list.component.html',
    styleUrls: ['./github-list.component.css']
})
export class GithubListComponent implements OnInit, OnDestroy {
    feed:any;
    currentUser:any;
    loading:boolean = true;
    type: Subject<string> = new Subject<string>();
    offset: number = 0;
    itemsPerPage: number = 10;
    parametersSubscription: Subscription;
    feedSubscription: Subscription;
    feedObservable: ApolloQueryObservable<any>;

    constructor(
        private apollo: Angular2Apollo,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.feedObservable = this.apollo.watchQuery({
            query: feedQuery,
            variables: {
                type: this.type,
                offset: this.offset,
                limit: this.itemsPerPage
            },
            forceFetch: true
        });

        this.feedSubscription = this.feedObservable.subscribe(({data, loading}) => {
            console.log('JA DET HAR JEG :D', data);
            this.feed = data.feed;
            this.currentUser = data.currentUser;
            this.loading = loading;
        });

        this.parametersSubscription = this.route.params.subscribe((params) => {
            this.loading = true;
            this.type.next((params['type'] || 'top').toUpperCase());
        });
    }

    fetchMore() {
        this.feedObservable.fetchMore({
            variables: {
                offset: this.offset + this.itemsPerPage
            },
            updateQuery: (prev, {fetchMoreResult}) => {
                if(!fetchMoreResult.data) {
                    return prev;
                }

                return Object.assign({}, prev, {
                    feed: [...prev.feed, ...fetchMoreResult.data.feed]
                });
            }
        });

        this.offset += this.itemsPerPage;
    }

    ngOnDestroy() {
        this.feedSubscription.unsubscribe();
    }

}
