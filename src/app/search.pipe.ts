import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[],searchText:any,property:string): any[] {

       if(searchText && property){



                  return value.filter((it:any)=>{return it[property].includes(searchText) });
       }
       else
           return value;

  }

}
