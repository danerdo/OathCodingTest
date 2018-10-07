import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatName'
})
export class FormatNamePipe implements PipeTransform {

  // this simply pulls off the email and extraneous characters from author name
  transform(name: string): string {
    return name.slice(2 + name.indexOf('("'), name.length - 2);
  }

}
