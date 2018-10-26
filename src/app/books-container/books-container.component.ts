import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.css']
})
export class BooksContainerComponent implements OnInit {
  private books;
  constructor(
    private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchData()
      .subscribe(data =>  this.books = data);
  }


  removeBook(data: any) {
    console.log('Deleting book: ', data)
    const bookIndex = this.books.findIndex(book => book.title === data.title);
    this.books.splice(bookIndex, 1);
  }


  addBookItem(AddBookData:any){
    console.log('add book =>>>>' , AddBookData)
    AddBookData.id = this.books.length + 1;
    this.books.push(AddBookData)
  }
}
