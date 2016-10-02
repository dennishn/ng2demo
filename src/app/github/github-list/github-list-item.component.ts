import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-github-list-item',
    templateUrl: './github-list-item.component.html'
})
export class GithubListItemComponent implements OnInit {

    @Input() entry;
    @Input() currentUser;

    constructor() {
    }

    ngOnInit() {
        console.log(this.entry);
    }

}
