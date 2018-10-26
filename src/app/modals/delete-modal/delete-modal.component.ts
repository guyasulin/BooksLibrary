import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialog } from '@angular/material';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  title: string;
  author: string;
  date:number;

  constructor(private configService:ConfigService,
               public dialogRef: MatDialogRef<DeleteModalComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any,
                private dataService:DataService) { }

  ngOnInit() {
    console.log(this.data);
  }

 onNoClick(): void {
  this.dialogRef.close();
}
  onRemove(){
    this.dialogRef.close(this.data);
 }
}
