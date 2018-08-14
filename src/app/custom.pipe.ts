import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('value ->' + value);
    return value.split('').reverse().join('');
  }

}

@Pipe({
  name: 'custom2'
})
export class CustomPipe2 implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log('value 1->' + value);
    return value.split('').reverse().join('');
  }

}