import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksItamComponent } from './books-itam.component';

describe('BooksItamComponent', () => {
  let component: BooksItamComponent;
  let fixture: ComponentFixture<BooksItamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksItamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksItamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
