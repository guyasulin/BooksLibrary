import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Config } from '../config';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url:string = "../../assets/data/data.json";
  public bookList = [];
  book: any;

  

  constructor(public httpClient:HttpClient) { 
    this.fetchData()
    .pipe(take(1))
      .subscribe(data => {
        this.bookList = data;
        console.log("000-> ",this.bookList);
     });
  }

fetchData():Observable<Config[]> {
  return this.httpClient.get<Config[]>(this._url);
  
}

addData(bookData){
  // 1. push new book into bookslist Array
  return this.httpClient.post('../../assets/data/data.json',bookData);
  
}
getBookList(){
  this.fetchData()
  .pipe(take(1))
  .subscribe(data => {
    console.log(data);
    this.bookList = data
  });
  }
}