import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'identity'
})
export class IdentityPipe implements PipeTransform {

  transform(value: number): number {
    return value + 1;
  }
}
