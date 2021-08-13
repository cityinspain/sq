import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UiModule } from '@sq/ui';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeightPipe } from '@sq/util';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'profile',
    loadChildren: () => import('@sq/profile').then((m) => m.ProfileModule),
  },
];
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    UiModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
