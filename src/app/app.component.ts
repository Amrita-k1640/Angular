import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



    mobileId:number;
    mobileName:String;
    mobileCost:number;

    details:any[];
    details2:any[];
    details3:any[];

    id:number;
    name:String;
    salary:number;
    department:String;

     printMobileDetails(){

           console.log("Your mobile id is:"+this.details);
           console.log("your Mobile Name is:"+this.details2);
           console.log("Your mobile cost is:"+this.details3);


     }
     message(){

            alert(this.id+" "+this.name+" "+this.salary+" "+this.department);
     }


}
