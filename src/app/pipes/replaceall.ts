import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'ReplaceAll'
})
export class ReplaceAll implements PipeTransform {
    transform(input: string, arg1, arg2): string {
      return input.replace(new RegExp(arg1, 'g'), arg2);
    }
}
