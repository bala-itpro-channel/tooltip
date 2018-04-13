import { NgModule } from '@angular/core';

import { PipeDemoRoutingModule } from './pipe-demo.router';
import { PipeDemoComponent } from './pipe-demo.component';
import { SharedModule } from './../shared/shared.module';
import { ReplaceAll } from '../pipes/replaceall';
@NgModule({
  imports: [ SharedModule, PipeDemoRoutingModule ],
  declarations: [ PipeDemoComponent ]
})

export class PipeDemoModule {}
