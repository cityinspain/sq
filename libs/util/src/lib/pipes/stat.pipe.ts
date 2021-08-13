import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stat',
})
export class StatPipe implements PipeTransform {
  transform(value: any, form: string): any {
    switch (form) {
      case 'avg':
        return `.${Math.floor(value * 1000)}`;
    }
  }
}
