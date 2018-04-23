import { Component } from '@angular/core';
import { InteractionService } from './component-interaction.service';
import { NgModel } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'component-interaction-container',
    template  : `<div class="parent">
                  <h1>Parent Component</h1>
                  <h4>Pass data to child component using service</h4>
                  <div style="padding:20px">
                    <input type="text" [(ngModel)]="message" >
                    <button (click)='passData("message from parent")'>Send</button>
                  <div>
                  <component-interaction-sibling></component-interaction-sibling>
                  <component-interaction></component-interaction>
                 </div>`,
    styleUrls: ['component-interaction-container.component.scss'],
    providers: [ InteractionService ]
})
export class ComponentInteractionContainerComponent {
  public message = '';
  constructor(private interactService: InteractionService) {
  }

  passData(data: string) {
    const finalMessage = `${this.message} at ${new Date()}`;
    this.interactService.sendMessage(finalMessage);
  }
}
