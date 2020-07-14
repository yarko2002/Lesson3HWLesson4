import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {UserComponent} from './components/user/user.component';
import { FullUserComponent } from './components/full-user/full-user.component';
import { PostComponent } from './components/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    FullUserComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'user/:id', component: FullUserComponent}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
