import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height',
})
export class HeightPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return `${Math.floor(value / 12)}' ${value % 12}"`;
  }
}
