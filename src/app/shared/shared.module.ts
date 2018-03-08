import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { TooltipContainerComponent, TooltipContainerDirective } from './tooltip-container';
import { TooltipDirective } from './tooltip.directive';
@NgModule({
    imports: [ CommonModule ],
    declarations: [ TooltipDirective ],
    providers: [],
    exports: [TooltipDirective ],
})

export class SharedModule { }
