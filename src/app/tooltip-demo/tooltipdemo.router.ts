import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TooltipDemoComponent } from './tooltipdemo.component';

const routes: Routes = [
  {
    path: '',
    component: TooltipDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TooltipDemoRoutingModule { }