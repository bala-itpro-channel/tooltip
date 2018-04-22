import { Component, OnDestroy } from '@angular/core';
import { InteractionService } from './component-interaction.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'component-interaction-sibling',
    templateUrl: 'component-interaction-sibling.component.html',
    styleUrls: ['component-interaction-sibling.component.scss']
})
export class ComponentInteractionSiblingComponent implements OnDestroy {
  public receivedMessage = 'Init message';
  subscription: Subscription;
  constructor(private interactService: InteractionService) {
    this.subscription = this.interactService.interactionSource$.subscribe(
      data => {
        this.receivedMessage = data;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
