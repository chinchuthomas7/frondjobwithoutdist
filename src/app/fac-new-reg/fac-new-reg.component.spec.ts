import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacNewRegComponent } from './fac-new-reg.component';

describe('FacNewRegComponent', () => {
  let component: FacNewRegComponent;
  let fixture: ComponentFixture<FacNewRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacNewRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacNewRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
