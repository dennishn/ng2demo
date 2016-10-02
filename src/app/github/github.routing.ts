import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {GithubListComponent} from './github-list/github-list.component';
import {GithubDetailComponent} from './github-detail/github-detail.component';

const githubRoutes: Routes = [
    {
        path: '',
        redirectTo: '/github',
        pathMatch: 'full'
    },
    {
        path: 'github',
        component: GithubListComponent
    },
    {
        path: 'github/:repository',
        component: GithubDetailComponent
    }
];

export const githubRouting: ModuleWithProviders = RouterModule.forChild(githubRoutes);