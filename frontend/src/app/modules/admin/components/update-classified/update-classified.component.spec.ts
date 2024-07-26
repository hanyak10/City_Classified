import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClassifiedComponent } from './update-classified.component';

describe('UpdateClassifiedComponent', () => {
  let component: UpdateClassifiedComponent;
  let fixture: ComponentFixture<UpdateClassifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateClassifiedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClassifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
