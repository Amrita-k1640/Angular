import { Component, OnInit } from '@angular/core';
import{Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book',
  template:`



       Enter id which you want to Add: <div><input type="number" [(ngModel)]="addId" name="id"  required #ID=ngModel/>
                                       <div *ngIf="ID.errors">
                                      <div *ngIf="ID.errors.required && ID.touched" class="text-danger">
                                        ID is required.
                                        </div>
                                      </div><br><br/>

        Enter Name to update : <div><input type="text" [(ngModel)]="addName" required #NAME=ngModel/>

                                      <div *ngIf="NAME.errors">
                                      <div *ngIf="NAME.errors.required && NAME.touched" class="text-danger">
                                        ID is required.
                                        </div>

                                </div><br><br/>

        Enter Author to update : <div><input type="text" [(ngModel)]="addAuthor" required  #AUTHOR=ngModel/>

                                       <div *ngIf="AUTHOR.errors">
                                      <div *ngIf="AUTHOR.errors.required && AUTHOR.touched" class="text-danger">
                                        ID is required.
                                        </div>


                                  </div><br><br/>

        <button type="update" (click)="add()" class="btn btn-success" >Add</button><br><br/>

        <table border='1'>
        <thead>
         <tr>
          <th (click)='change("id")'>ID</th>
          <th (click)='change("name")'>Name</th>
          <th (click)='change("author")'>Author</th>
          <th>Update</th>
          <th>Delete</th>


         </tr>
         </thead>
         <tbody>
          <tr>
          <td><input type="text" [(ngModel)]="searchId" ></td>
          <td><input type="text" [(ngModel)]="searchName" ></td>
          <td><input type="text" [(ngModel)]="searchAuthor"></td>
         </tr>
         <tr *ngFor="let book of books  | sortPipe:column |search:searchId:'id' | search:searchName:'name' |search:searchAuthor:'author'">
         <td>{{ book.id }}</td>
         <td>{{ book.name }}</td>
         <td>{{ book.author }}</td>
         <td><button type="Update" (click)="click(book.id,book.author,book.name)" >UPDATE</button></td>
         <td><button type="Delete" (click)="delete(book.id)" >DELETE</button><br><br/></td>
          </tr>
         </tbody>
         </table><br><br/>


         ID to Update: <input type="text" value="{{id}}" name="id" /><br><br/>

         Enter Name to update : <input type="text" value="{{name}}" [(ngModel)]="updateName" /><br><br/>

         Enter Author to update : <input type="text" value="{{author}}"  [(ngModel)]="updateAuthor" /><br><br/>

         <button type="update" (click)="update()" class="btn btn-success">Submit</button><br><br/>


  `,

})

export class BookComponent implements OnInit {


  books:Book[];
  choice:number;
  column:string;

  updateName;
  updateAuthor;

  addId:number;
  addName:string;
  addAuthor:string;

  id;
  name;
  author;

  searchId:number;
  searchName:string;
  searchAuthor:string;

  searchEle:string;

  constructor(private bookservice:BookService) {}

  ngOnInit(){

        this.bookservice.getBooks().subscribe((data:Book[])=>{ this.books=data;})

  }

  change(col:string){

          console.log(col);
         this.column=col;


  }
  search(element:string){

               this.searchEle=element;
  }


  add(){                                              //This method is to add the values to values to array


           this.books.push({"id":this.addId,
           "name":this.addName,
           "author":this.addAuthor});
  }
  update(){                                            // To update the data



         for(let value of this.books){

               if(value.id==this.id){

                      value.author=this.updateAuthor;
                      value.name=this.updateName;

               }

         }
  }

  click(id,author,name){                              //This method is to give update textfields a value

                   this.id=id;
                   this.author=author;
                   this.name=name;


  }
  delete(id){                                         // To delete a particular element

    for(let value of this.books){

             if(value.id==id){



              this.books.splice(this.books.indexOf(value),1);

  }
}
  }
}

