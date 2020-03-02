import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url='http://localhost:4100';


  constructor(private http:HttpClient) { }

  getBooks(){

       return this.http.get(`${this.url}/books`);
  }
}
