// ./app/shared/underline.directive.ts
import { Directive, HostListener, Renderer, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[tooltip]'
})
export class TooltipDirective{
    @Input() tooltip : string;
    constructor(
        private renderer: Renderer,
        private el: ElementRef
    ){}
    @HostListener('mouseenter') onMouseEnter() {
    }

    @HostListener('mouseleave') onMouseLeave() {
    }

    @HostListener('document:click', ['$event']) clickout(event) {
      if(!this.el.nativeElement.contains(event.target)) {
            //show the tooltip
            this.hideToolTip();
      } else {
            //clicked outside the button and any part in a document
            //Hide the tooltip
            this.showToolTip();
      }
    }

    @HostListener('click', ['$event.target']) onClick(btn) {
        //console.log("button", btn, "number of clicks:", this.numberOfClicks++);
        console.log('clicked');
        setTimeout(() => {
            this.showToolTip();
        }, 50);
        
    }

    @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(evt: KeyboardEvent) {
        this.hideToolTip();
    }

    showToolTip(){
        var container =  document.getElementById("divContainer");
        container.innerHTML = this.tooltip;
        var topPos = this.el.nativeElement.offsetTop;
        var leftPos = this.el.nativeElement.offsetLeft;
        var postionTop = "top:" + (topPos - 50).toString() + "px;";
        var postionleft = "left:" + (leftPos - 20).toString() + "px;";

        container.setAttribute("style", "display:inline;position:absolute;color:red; border: 1px solid blue;width:200px;"+postionTop + postionleft);
    }

    hideToolTip(){
        var container =  document.getElementById("divContainer");
        container.setAttribute("style", "display:none;");
    }

}