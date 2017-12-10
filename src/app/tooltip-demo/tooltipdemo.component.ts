import { Component } from '@angular/core';

@Component({
  selector: 'tooltipdemo',
  templateUrl: './tooltipdemo.component.html',
  styleUrls: ['./tooltipdemo.component.css']
})
export class TooltipDemoComponent {
  tooltipcontent: string = "tooltip content text here";
}
