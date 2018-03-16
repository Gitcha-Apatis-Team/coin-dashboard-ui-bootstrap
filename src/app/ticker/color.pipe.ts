import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log("value " +  value );
    console.log("any " +  args );
    return null;
  }

}
