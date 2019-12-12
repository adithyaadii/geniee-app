import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstallComponent } from './bookstall.component';

describe('BookstallComponent', () => {
  let component: BookstallComponent;
  let fixture: ComponentFixture<BookstallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookstallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
