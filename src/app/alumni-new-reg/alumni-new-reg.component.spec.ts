import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniNewRegComponent } from './alumni-new-reg.component';

describe('AlumniNewRegComponent', () => {
  let component: AlumniNewRegComponent;
  let fixture: ComponentFixture<AlumniNewRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniNewRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumniNewRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
