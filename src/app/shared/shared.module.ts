import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { TooltipContainerComponent, TooltipContainerDirective } from './tooltip-container';
import { TooltipDirective } from './tooltip.directive';
import { ReplaceAll } from '../pipes/replaceall';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ TooltipDirective, ReplaceAll ],
    providers: [],
    exports: [TooltipDirective, ReplaceAll ],
})

export class SharedModule { }
