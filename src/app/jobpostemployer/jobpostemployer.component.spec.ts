import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostemployerComponent } from './jobpostemployer.component';

describe('JobpostemployerComponent', () => {
  let component: JobpostemployerComponent;
  let fixture: ComponentFixture<JobpostemployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobpostemployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobpostemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
