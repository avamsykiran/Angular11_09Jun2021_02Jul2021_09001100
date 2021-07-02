import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixedLength'
})
export class FixedLengthPipe implements PipeTransform {

  transform(value: string|null, expectedLength:number): string|null {

    let result = value;

    if(value && value.length!==expectedLength){
      if(value.length>expectedLength){
        result = value.substr(0,expectedLength);
      }else{
        let gap = expectedLength-value.length;
        for(let i=1;i<=gap;i++)
          result += "*";
      }
    }

    return result;
  }

}
