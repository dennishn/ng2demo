import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {appRouting} from './app.routing';
import {GithubModule} from './github/github.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        appRouting,
        GithubModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
