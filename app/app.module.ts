import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import {AppComponent} from './app.component';
import { HeroesComponent }  from './hero.component';
import {HeroDetailComponent } from  './hero-detail.component';
import { HeroService }         from './hero.service';
import  {DashboardComponent} from './dashboard.component';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'heroes',
      component: HeroesComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'detail/:id',
      component: HeroDetailComponent
    }
  ]) ],
  declarations: [ AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroService]
})
export class AppModule { }
