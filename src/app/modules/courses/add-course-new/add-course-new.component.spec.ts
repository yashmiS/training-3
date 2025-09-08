import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseNewComponent } from './add-course-new.component';

describe('AddCourseNewComponent', () => {
  let component: AddCourseNewComponent;
  let fixture: ComponentFixture<AddCourseNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCourseNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCourseNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
