import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Config } from '../config';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ConfigService {

  // private _url:string = "../../assets/data/data.json";
  // public bookList = [];
  // constructor(private httpClient:HttpClient) {
  //   console.log("gggg");
  //   this.fetchData()
  //   .pipe(take(1))
  //     .subscribe(data => {
        
  //       this.bookList = data;
  //       console.log("000-> ",this.bookList);
  //    });
  // }

// fetchData():Observable<Config[]> {
//   return this.httpClient.get<Config[]>(this._url);
// }

// fetchchData():Observable<Config[]> {
//   return this.httpClient.get<Config[]>(this._url);
// }
addData(bookData){
  // 1. push new book into bookslist Array
  
}
// getBookList(){
//   this.fetchData()
//   .pipe(take(1))
//   .subscribe(data => {
//     console.log(data);
//     this.bookList = data
//   });
// }

}
