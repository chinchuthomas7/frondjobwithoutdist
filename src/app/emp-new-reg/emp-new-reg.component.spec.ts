import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpNewRegComponent } from './emp-new-reg.component';

describe('EmpNewRegComponent', () => {
  let component: EmpNewRegComponent;
  let fixture: ComponentFixture<EmpNewRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpNewRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpNewRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
