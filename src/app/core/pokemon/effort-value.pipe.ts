import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
   name: 'effortValue',
})
export class EffortValuePipe implements PipeTransform {
   transform(value: any[], ...args: unknown[]): unknown {
      const effortValues = value
         .filter((curr) => curr.effort)
         .map((curr) => `${curr.effort} ${this.titleCase(curr.stat.name)}`);
      return effortValues.join(',');
   }

   titleCase(str: string) {
      return str
         .toLocaleLowerCase()
         .split('-')
         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
         .join(' ');
   }
}
