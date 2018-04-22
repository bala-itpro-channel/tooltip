import { Component } from '@angular/core';
import { InteractionService } from './component-interaction.service';

@Component({
    moduleId: module.id,
    selector: 'component-interaction-container',
    template  : `<div>
                  <component-interaction></component-interaction>
                  <component-interaction-sibling></component-interaction-sibling>
                  <button (click)='passData("message from parent")'>Send</button>
                </div>`,
    styleUrls: ['component-interaction-container.component.scss'],
    providers: [ InteractionService ]
})
export class ComponentInteractionContainerComponent {
  constructor(private interactService: InteractionService) {
  }

  passData(data: string) {
    this.interactService.sendMessage(data);
  }
}
