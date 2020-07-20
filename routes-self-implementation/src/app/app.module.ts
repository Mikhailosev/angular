import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './games/posts/posts.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './users/profile/profile.component';

const routeApp = [
  { path: 'games', component: GamesComponent },
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/profile/:id', component: ProfileComponent },
  { path: 'games/:id/:rating', component: PostsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GamesComponent,
    HomeComponent,
    PostsComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routeApp)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
