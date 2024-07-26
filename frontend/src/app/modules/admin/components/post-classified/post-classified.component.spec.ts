import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostClassifiedComponent } from './post-classified.component';

describe('PostClassifiedComponent', () => {
  let component: PostClassifiedComponent;
  let fixture: ComponentFixture<PostClassifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostClassifiedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostClassifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
