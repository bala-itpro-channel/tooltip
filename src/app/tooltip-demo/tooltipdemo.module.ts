import { NgModule } from '@angular/core';

import { TooltipDemoRoutingModule } from './tooltipdemo.router';
import { TooltipDemoComponent } from './tooltipdemo.component';
import { SharedModule } from './../shared/shared.module';
@NgModule({
  imports: [ SharedModule, TooltipDemoRoutingModule ],
  declarations: [ TooltipDemoComponent ]
})

export class TooltipDemoModule {}

