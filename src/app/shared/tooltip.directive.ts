// ./app/shared/underline.directive.ts
import { Directive, HostListener, Renderer2, ElementRef, Input, TemplateRef,
  ComponentRef, Type, ViewContainerRef, ComponentFactoryResolver, Injector } from '@angular/core';

@Directive({
    selector: '[tooltip]'
})
export class TooltipDirective{
    // Input tooltip text from the button / any input controls etc
    @Input() tooltip: string | TemplateRef<any> | Type<any>;
    private componentRef: ComponentRef<any>;

    constructor(
        private renderer: Renderer2,
        private el: ElementRef,
        private injector: Injector,
        private resolver: ComponentFactoryResolver,
        private vcr: ViewContainerRef ) {}

    @HostListener('mouseenter') onMouseEnter() {
        //this.showToolTip();
    }

    @HostListener('mouseleave') onMouseLeave() {
        //this.hideToolTip();
    }

    @HostListener('document:click', ['$event']) clickout(event) {
      //Click outside the Host container
      if(!this.el.nativeElement.contains(event.target)) {
            this.hideToolTip();
      }
    }

    @HostListener('click', ['$event.target']) onClick(btn) {
        //Click inside the Host container
        setTimeout(() => {
            this.showToolTip();
        }, 50);
    }

    @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(evt: KeyboardEvent) {
        //ESC button click
        this.hideToolTip();
    }

    showToolTip(){
        let container =  document.getElementById("divContainer");
        container.innerHTML = this.tooltip;
        let topPos = this.el.nativeElement.offsetTop;
        let leftPos = this.el.nativeElement.offsetLeft;
        let postionTop = "top:" + (topPos - 70).toString() + "px;";
        let postionleft = "left:" + (leftPos - 60).toString() + "px;";

        container.setAttribute("style", "padding:5px;font-size:0.75rem;display:inline;position:absolute;width:200px;height:50px;"+postionTop + postionleft);
    }

    hideToolTip(){
        let container =  document.getElementById("divContainer");
        container.setAttribute("style", "display:none;");
    }

}
