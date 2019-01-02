import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lockUnlockPassword'
})
export class LockUnlockPasswordPipe implements PipeTransform {

  transform(value: any, type:boolean = false): any {
    const result = {
      'false': value.split('').map( letter => letter = '*' ).join(''),
      'true': value
    }[String(type)];
    return result;
  }

}
