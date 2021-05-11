import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// 要用FormsModule 才能在html用[(ngModel)]=
import { FormsModule } from '@angular/forms';


// 每個component都必須宣告在（且只能宣告在）一個 NgModule 中。
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


// module 區域路由。routing module不用再設一次路由。區域路由module 被並到整個module,這裡又載入該module
import { moduleRouteModule } from './module-route/module-route.module';


@NgModule({
  // declaration component
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PageNotFoundComponent,
  ],
  // imports module
  imports: [
    BrowserModule,
    FormsModule,
    moduleRouteModule,
    AppRoutingModule,  //模組的 imports 陣列，AppRoutingModule 是最後一個
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
