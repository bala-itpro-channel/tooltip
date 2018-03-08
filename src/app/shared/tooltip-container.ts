import { Component, Inject, OnInit, Directive, ViewChild, ElementRef } from '@angular/core';

@Directive ({
  selector: '.tooltip-container' // . refers class attribute directive
})
export class TooltipContainerDirective {
}

@Component({
  template: `
    <div class="tooltip-container" [ngStyle]="{top: top}">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
    .tooltip-container {
      background-color: white;
      color: #fff;
      display: inline-block;
      padding: 0.4em;
      position: absolute;
      border-style: solid;
      border-color: coral;
      background: gray;
    }
  `
]
})
export class TooltipContainerComponent implements OnInit {

  @ViewChild(TooltipContainerDirective, { read: ElementRef } ) private tooltipContainer;
  top: string;

  constructor( @Inject( 'tooltipConfig' ) private config ) {
  }

  ngOnInit() {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    const { top } = this.config.host.getBoundingClientRect();
    const { height } = this.tooltipContainer.nativeElement.getBoundingClientRect();

    this.top = `${top - height}px`;
  }

}
