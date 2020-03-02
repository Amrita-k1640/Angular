import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  template: `

            <h2 style="text-align:center"> FORMS </h2><br><br/>
               <div class="container">
               <form #forms=ngForm>
               <div class="form-group">
               <label for="id"><b>Product Id</b></label>
               <input type="number" class="form-control" [(ngModel)]="id"  id="id" name="productId" required #ID=ngModel>
               <div *ngIf="ID.errors">
               <div *ngIf="ID.errors.required && ID.touched && ID.invalid" class="text-danger">
               Id is required.
               </div>
               </div>

               <div class="form-group">
               <label for="name"><b>Product Name</b></label>
               <input type="text" class="form-control" [(ngModel)]="name" name="productName" id="name" required #NAME=ngModel>
               <div *ngIf="NAME.errors">
               <div *ngIf="NAME.errors.required && NAME.touched" class="text-danger">
               Name is required.
               </div>
               </div>

               <div class="form-group">
               <label for="productCost"><b>Product Cost</b></label>
               <input type="number" class="form-control" [(ngModel)]="cost" name="ProductCost" id="productCost" required="true" #COST=ngModel>
               <div *ngIf="COST.errors">
                 <div *ngIf="COST.errors.required && COST.touched" class="text-danger">
               Cost is required.
                </div>
               </div>
               </div>

               <div class="form-group">
               <label ><b>Product Online</b></label>
               Yes:<input type="radio"  name="online" required  /> No:<input type="radio" name="online"  required />
               </div>

               <div class="form-group">
               <label><b>product Category</b></label>
               <select [(ngModel)]="category" class="form-control" name="ProductCat" required #CATEGORY=ngModel>
               <option></option>
               <option> Grocery</option>
               <option> Mobile</option>
               <option> Electronics</option>
               <option> cloths</option>
              </select>

              <div *ngIf="CATEGORY.errors">
              <div *ngIf="CATEGORY.errors.required && CATEGORY.touched">
               Category is required.
               </div>

               </div>

               <div class="form-group">

               <b>Available in store: </b>

               <label for="market1" >BigBazar</label>
               <input type="checkbox" [(ngModel)]="mart" name="mart1" id="market1" name="store1"  />
               <label for="market2" >DMart</label>
               <input type="checkbox" [(ngModel)]="mart2" name="mart1" id="market2" name="store2"  />
               <label for="market3" >Reliance</label>
               <input type="checkbox" [(ngModel)]="mart3" name="mart1" id="market3" name="store3"  />
               <label for="market4" >Market</label>
               <input type="checkbox" [(ngModel)]="mart4" name="mart1" id="market4" name="store4"  />

                </div>

              <button type="submit"  (click)="onSubmit()" [disabled]="forms.form.invalid">Add product</button>



  `,

})
export class FormsComponent implements OnInit {



  id:number;
  name:string;
  cost:string;
  category;
  mart:boolean;
  mart2;
  mart3;
  mart4;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

            console.log("product id:"+this.id);
            console.log("product name:"+this.name);
            console.log("product cost:"+this.cost);
            console.log("product category:"+this.category);
            console.log("Available in:"+this.mart+this.mart2+this.mart3+this.mart4);

  }



}
