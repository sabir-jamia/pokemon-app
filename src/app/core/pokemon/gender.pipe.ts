import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'gender',
})
export class GenderPipe implements PipeTransform {
   transform(value: number, ...args: unknown[]): string {
      const femalePercentage = (value / 8) * 100;
      const malePercentage = 100 - femalePercentage;
      return `${malePercentage} \u2642 ${femalePercentage} \u2640`;
   }
}
