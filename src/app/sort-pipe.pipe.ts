import { Pipe, PipeTransform } from '@angular/core';
import { IfStmt } from '@angular/compiler';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

  transform(value:any[],property:string): any[] {

            if(property){
                 return value.sort((a:any,b:any)=> a[property].localeCompare(b[property]));
            }
            else
               return value;
  }

}
