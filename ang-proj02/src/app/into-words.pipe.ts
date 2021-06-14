import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intoWords'
})
export class IntoWordsPipe implements PipeTransform {

  digits : string[];

  constructor(){
    this.digits=[
      "ZERO ","ONE ","TWO ","THREE ","FOUR ","FIVE ",
      "SIX ","SEVEN ","EIGHT ","NINE "
    ];
  }

  transform(value: number): string {

    let strVal = `${value}`;
    let result = '';

    for(let i=0;i<strVal.length;i++){
      let ch = strVal.charAt(i);
      if('.'===ch) result +='dot ';
      else result += this.digits[parseInt(ch)];
    }

    return result;
  }

}
