import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksItamComponent } from './books-itam/books-itam.component';
import { DataService } from './services/data.service';
import { ConfigService } from './services/config.service';
import { AddButtonComponent } from './add-button/add-button.component';
import { AddBookModalComponent } from './modals/add-book-modal/add-book-modal.component';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';
import { EditModalComponent } from './modals/edit-modal/edit-modal.component';
import { BooksContainerComponent } from './books-container/books-container.component';
import { MatComponentModule } from './mat-component/mat-component.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksItamComponent,
    AddButtonComponent,
    AddBookModalComponent,
    DeleteModalComponent,
    EditModalComponent,
    BooksContainerComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpModule,
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatComponentModule,
    ReactiveFormsModule
  ],
  entryComponents:[EditModalComponent,DeleteModalComponent,AddBookModalComponent],
  providers: [ConfigService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
