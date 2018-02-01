import {Pipe, PipeTransform} from '@angular/core';

// # Filter Array of Objects
@Pipe({name: 'filterArrayComp'})
export class FilterArrayCompPipe implements PipeTransform {
  transform(items, args) {
    if (!args || !args[0]) {
      return items;
    } else if (items) {
      return items.filter(item => item.competence.match(new RegExp(args, 'i')));
    }
  }
}
