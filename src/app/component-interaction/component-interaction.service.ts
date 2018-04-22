import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class InteractionService {
  private interactionSource = new Subject<string>();
  interactionSource$ = this.interactionSource.asObservable();

  sendMessage(strData: string) {
    this.interactionSource.next(strData);
  }
}
