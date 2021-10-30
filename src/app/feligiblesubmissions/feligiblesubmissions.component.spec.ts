import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeligiblesubmissionsComponent } from './feligiblesubmissions.component';

describe('FeligiblesubmissionsComponent', () => {
  let component: FeligiblesubmissionsComponent;
  let fixture: ComponentFixture<FeligiblesubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeligiblesubmissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeligiblesubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
