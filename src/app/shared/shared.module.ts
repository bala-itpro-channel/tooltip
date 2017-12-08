import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container';
import { TooltipDirective } from './tooltip.directive';
@NgModule({
    imports: [BrowserModule, CommonModule ],
    declarations: [ TooltipContainerComponent, TooltipDirective ],
    providers: [],
    exports: [TooltipContainerComponent, TooltipDirective]
})

export class SharedModule { }
