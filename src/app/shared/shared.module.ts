import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipContainerComponent, TooltipContainerDirective } from './tooltip-container';
import { TooltipDirective } from './tooltip.directive';
@NgModule({
    imports: [ CommonModule ],
    declarations: [ TooltipDirective, TooltipContainerComponent, TooltipContainerDirective ],
    providers: [],
    exports: [TooltipDirective, TooltipContainerComponent, TooltipContainerDirective],
    entryComponents: [ TooltipContainerComponent ]
})

export class SharedModule { }
