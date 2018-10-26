import { Component,OnInit, Input, EventEmitter, Output, } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { EditModalComponent } from '../modals/edit-modal/edit-modal.component';
import { DeleteModalComponent } from '../modals/delete-modal/delete-modal.component';
import { MatDialog } from '@angular/material';
import { AddBookModalComponent } from '../modals/add-book-modal/add-book-modal.component';




@Component({
  selector: 'app-books-itam',
  templateUrl: './books-itam.component.html',
  styleUrls: ['./books-itam.component.css']
})
export class BooksItamComponent implements OnInit {
  @Input() book;
  @Input() AddBookData;
  @Output() deleteBook = new EventEmitter<any>();

  title: string;
  author: string;
  date:number;

  
  
  constructor(public configService:ConfigService,
    public dialog: MatDialog,){ }

ngOnInit(){
  }

  openDialogEdit(): void {
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '489px',
      data: this.book,
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }

  openDialogRemove(): void {
    const dialogRef = this.dialog.open(DeleteModalComponent,{
      data: this.book
    });

    dialogRef.afterClosed().subscribe(result => {
      this.deleteBook.emit(result);
    })
  }


}
