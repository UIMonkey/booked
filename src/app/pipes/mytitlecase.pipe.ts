import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mytitlecase'
})
export class MytitlecasePipe implements PipeTransform {

  transform(value: string): string {
    if (typeof(value) === 'string') {
      const formatString = value.trim();
      const wordArry = formatString.split(' ');
      const mappedWordArr = wordArry.map((word: string) => {
        const arr = word.split('');
        const firstLetter = arr.splice(0, 1);
        const newArr = firstLetter.map(letter => letter.toLocaleUpperCase()).concat(arr);
        return newArr.join('');
      });

      return mappedWordArr.join(' ');
    } else {
      return '';
    }
  }

}
