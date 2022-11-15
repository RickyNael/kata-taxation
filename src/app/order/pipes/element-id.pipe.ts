import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'elementId'
})
export class ElementIdPipe implements PipeTransform {

  transform(element: string, id: number): string {
    return element + id;
  }
}
