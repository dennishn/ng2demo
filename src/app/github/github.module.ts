import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {ApolloModule} from 'angular2-apollo'
import {githubApolloClient} from './github.apollo-client';

import {githubRouting} from './github.routing';
import {GithubListComponent} from './github-list/github-list.component';
import {GithubListItemComponent} from './github-list/github-list-item.component';
import {GithubDetailComponent} from './github-detail/github-detail.component';

@NgModule({
    declarations: [
        GithubListComponent,
        GithubListItemComponent,
        GithubDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        githubRouting,
        ApolloModule.withClient(githubApolloClient)
    ],
    providers: []
})
export class GithubModule {
}
