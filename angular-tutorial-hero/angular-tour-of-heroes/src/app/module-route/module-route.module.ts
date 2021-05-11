import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';
// 載入區域routing
import { moduleRouteRoutingModule } from './module-route-routing.module';




@NgModule({
  // declaration component
  declarations: [
    Compo1Component,
    Compo2Component
  ],
  // import module
  imports: [
    CommonModule,
    moduleRouteRoutingModule
  ]
})
export class moduleRouteModule { }
