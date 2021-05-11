import { NgModule } from '@angular/core';
// 載入route
import { RouterModule, Routes } from '@angular/router';

// 載入component
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';

// 宣告module區域路由
const mouduleRouteRoutes: Routes = [
  { path: 'compo1',  component: Compo1Component },
  { path: 'compo2', component: Compo2Component }
];

@NgModule({
  //不是根元件的，要用forChild才行
  imports: [
    RouterModule.forChild(mouduleRouteRoutes)
  ],
  exports: [
    RouterModule
  ]
})

// 要記得export
export class moduleRouteRoutingModule { }
