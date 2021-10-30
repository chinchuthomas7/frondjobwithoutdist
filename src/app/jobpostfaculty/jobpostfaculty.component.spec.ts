import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostfacultyComponent } from './jobpostfaculty.component';

describe('JobpostfacultyComponent', () => {
  let component: JobpostfacultyComponent;
  let fixture: ComponentFixture<JobpostfacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobpostfacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobpostfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
