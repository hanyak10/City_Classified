import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookClassifiedComponent } from './book-classified.component';

describe('BookClassifiedComponent', () => {
  let component: BookClassifiedComponent;
  let fixture: ComponentFixture<BookClassifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookClassifiedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookClassifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
