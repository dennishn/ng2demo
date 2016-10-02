import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-github-detail',
  templateUrl: './github-detail.component.html',
  styleUrls: ['./github-detail.component.css']
})
export class GithubDetailComponent implements OnInit {

  repository: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit( ) {
    this.repository = this.route.snapshot.params['repository'];
    console.log(this.repository);
  }

}
