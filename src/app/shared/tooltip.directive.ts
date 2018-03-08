// ./app/shared/underline.directive.ts
import { Directive, HostListener, Renderer2, ElementRef, Input, TemplateRef,
  ComponentRef, Type, ViewContainerRef, ComponentFactoryResolver, Injector,
  ReflectiveInjector, OnDestroy } from '@angular/core';
// import { GraphicsTooltipComponent } from '../graphics-tooltip/graphics-tooltip.component';
import { TooltipContainerComponent } from './tooltip-container';
@Directive({
    selector: '[tooltip]'
})
export class TooltipDirective implements OnDestroy {
    // Input tooltip text from the button / any input controls etc
    @Input() tooltip: string | TemplateRef<any> | Type<any>;
    private componentRef: ComponentRef<TooltipContainerComponent>;

    constructor(
        private renderer: Renderer2,
        private el: ElementRef,
        private injector: Injector,
        private resolver: ComponentFactoryResolver,
        private vcr: ViewContainerRef ) {}

    @HostListener('mouseenter') onMouseEnter() {
      if ( this.componentRef ) { return; }

      const factory = this.resolver.resolveComponentFactory(TooltipContainerComponent);
      const injector = ReflectiveInjector.resolveAndCreate([
        {
          provide: 'tooltipConfig',
          useValue: {
            host: this.el.nativeElement  // pass the host to the tooltip container
          }
        }
      ]);

      this.componentRef = this.vcr.createComponent( factory, 0, injector, this.generateToolContent() );
    }

    generateToolContent() {
      // Check the input is string
      if ( typeof this.tooltip === 'string') {
        const element = this.renderer.createText(this.tooltip);

        return [ [ element ] ];
      }

      // Check the input is Template (ng-template)
      if ( this.tooltip instanceof TemplateRef ) {
        const viewRef = this.tooltip.createEmbeddedView({});

        return [ viewRef.rootNodes ];
      }

    }

    destroy() {
      this.componentRef && this.componentRef.destroy();
      this.componentRef = null;
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.destroy();
    }

    @HostListener('document:click', ['$event']) clickout(event) {
      // Click outside the Host container
    }

    @HostListener('click', ['$event.target']) onClick(btn) {
        // Click inside the Host container
    }

    @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(evt: KeyboardEvent) {
        // ESC button click
    }

    ngOnDestroy() {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      this.destroy();
    }

}
