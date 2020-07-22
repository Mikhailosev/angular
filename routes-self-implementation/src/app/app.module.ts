import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AuthGuard } from './utils/auth.guard';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './games/posts/posts.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './users/profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CanDeactivateService } from './utils/deactivate.service';
const routeApp = [
  {
    path: 'games',
    component: GamesComponent,
    canDeactivate: [AuthGuard],
    children: [
      {
        path: ':id/:rating',
        component: PostsComponent,
        data: { title: 'The title of a page' },
      },
    ],
  },
  { path: '', component: HomeComponent },
  { path: 'account', redirectTo: 'users' },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: 'profile/:id', component: ProfileComponent }],
  },
  { path: '**', component: HomeComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GamesComponent,
    HomeComponent,
    PostsComponent,
    ProfileComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routeApp)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
