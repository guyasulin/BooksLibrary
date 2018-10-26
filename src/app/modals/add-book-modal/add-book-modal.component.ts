import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ConfigService } from '../../services/config.service';
import {DataService} from '../../services/data.service';
import { Validators, AbstractControl, FormGroup, FormBuilder } from '@angular/forms';
import { FileValidator } from 'ngx-material-file-input';

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.css']
})
export class AddBookModalComponent implements OnInit {

   form :FormGroup  ;

  constructor(public dialogRef: MatDialogRef<AddBookModalComponent>,
              private dataService: DataService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private configService: ConfigService,
              private fb: FormBuilder ) 
              { 
                  // console.log(this.dataService.bookList)    
                  this.form = this.fb.group({
                    title: ['',  Validators.required],
                    author: ['',  Validators.required],
                    imageUrl: [,  Validators.required],
                    // date: [new Date([this.AddBookData.date), Validators.required],
                  })    
              }
            
  ngOnInit() { 
   }

  onSend(){
    this.dialogRef.close(this.form.value)
    console.log(this.form.value);
  }

onNoClick(){
  this.dialogRef.close();
}

get bookTitle(): AbstractControl {
  return this.form.controls.title;
}

get bookAuthor() {
  return this.form.controls.author;
}
get bookImageUrl() {
  return this.form.controls.imageUrl;
}
getErrorMessage() {
  return 'This field is required';
}

}
