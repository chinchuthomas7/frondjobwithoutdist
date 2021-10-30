import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EeligiblesubmissionsComponent } from './eeligiblesubmissions.component';

describe('EeligiblesubmissionsComponent', () => {
  let component: EeligiblesubmissionsComponent;
  let fixture: ComponentFixture<EeligiblesubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EeligiblesubmissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EeligiblesubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
