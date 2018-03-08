import { Component } from '@angular/core';
import { GraphicsTooltipComponent } from './../graphics-tooltip/graphics-tooltip.component';

@Component({
  selector: 'tooltipdemo',
  templateUrl: './tooltipdemo.component.html',
  styleUrls: ['./tooltipdemo.component.css']
})

export class TooltipDemoComponent {
  graphicComponent = GraphicsTooltipComponent;
}
