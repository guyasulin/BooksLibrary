import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddBookModalComponent } from '../modals/add-book-modal/add-book-modal.component';
import { DataService } from '../services/data.service';
import { ConfigService } from '../services/config.service';


@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.css']
})
export class AddButtonComponent implements OnInit {
  @Output() addBook = new EventEmitter<any>();

  constructor(public dialog: MatDialog,private dataService:DataService,
              private configService:ConfigService) { }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddBookModalComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result) {
        this.addBook.emit(result)
      }
    });

  }

  ngOnInit() {
  }

}
