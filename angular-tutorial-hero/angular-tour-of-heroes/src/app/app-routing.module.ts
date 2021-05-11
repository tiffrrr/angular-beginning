import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 先import component
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// 設定。path=在網址列上打的字，就要導航到該component
const routes: Routes = [
  // 預設路徑，不然沒東西
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  // :id 會把在<a [routerLink]="['/hero', hero.id]">寫的變數（兩個參數，第一個路由，第二個變數），帶入:id的位置

  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // 任何與你配置中的路由都不匹配的路由都會使用這個路由。一定要放在最後一個。因為會從上往下找
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  // 將 RouterModule 新增到 AppRoutingModule 的 imports 陣列中，同時透過呼叫 RouterModule.forRoot() 來用這些 routes 配置它.這個方法之所以叫 forRoot()，是因為你要在應用的最上層配置這個路由器。 forRoot() 方法會提供路由所需的服務提供者和指令，還會基於瀏覽器的當前 URL 執行首次導航。
  imports: [RouterModule.forRoot(routes)],
  // AppRoutingModule 匯出 RouterModule，以便它在整個應用程式中生效。
  exports: [RouterModule]
})
export class AppRoutingModule { }
