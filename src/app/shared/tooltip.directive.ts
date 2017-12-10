// ./app/shared/underline.directive.ts
import { Directive, HostListener, Renderer, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[tooltip]'
})
export class TooltipDirective{
    //Input tooltip text from the button / any input controls etc
    @Input() tooltip : string;
    
    constructor(
        private renderer: Renderer,
        private el: ElementRef
    ){}

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

        container.setAttribute("style", "padding:5px;font-size:10px;display:inline;position:absolute;width:200px;height:50px;"+postionTop + postionleft);
    }

    hideToolTip(){
        let container =  document.getElementById("divContainer");
        container.setAttribute("style", "display:none;");
    }

}