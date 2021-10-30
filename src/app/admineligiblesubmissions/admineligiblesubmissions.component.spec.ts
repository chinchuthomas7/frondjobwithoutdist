import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineligiblesubmissionsComponent } from './admineligiblesubmissions.component';

describe('AdmineligiblesubmissionsComponent', () => {
  let component: AdmineligiblesubmissionsComponent;
  let fixture: ComponentFixture<AdmineligiblesubmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineligiblesubmissionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineligiblesubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
