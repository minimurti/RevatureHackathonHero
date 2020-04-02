import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
    name: 'filter'
})export class FilterPipe implements PipeTransform {

  transform(value: User[], ...args: string[]): User[] {

      console.log(args);

      if (!args[0]) {
        return value;
      }

      const searchValue = args[0].toLowerCase();

      return value.filter(user => {
        if (user.email.toLowerCase().includes(searchValue)) {
          return true;
        }
        return false;
      });

    }

}
