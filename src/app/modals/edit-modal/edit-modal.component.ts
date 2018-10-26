import { Component, OnInit, Inject } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { DataService } from '../../services/data.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})

export class EditModalComponent implements OnInit {

  title: string;
  author: string;
  date: Date;
  form: FormGroup;
 

  
  constructor(private configService:ConfigService,
    public dialogRef: MatDialogRef<EditModalComponent>,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dataService:DataService) {

                this.form = this.fb.group({
                  title: [this.data.title, Validators.required],
                  date: [new Date(this.data.date), Validators.required],
                  author: [this.data.author, Validators.required]
                })
               }


  ngOnInit() {
    console.log(this.form);

  }
  onSubmit(){
    this.dialogRef.close(this.form.value)

   }

   onNoClick(): void {
    this.dialogRef.close();
  }

  get bookTitle(): AbstractControl {
    return this.form.controls.title;
  }

  get bookAuthor() {
    return this.form.controls.author;
  }
   getErrorMessage() {
    return 'This field is required';
   }

}
