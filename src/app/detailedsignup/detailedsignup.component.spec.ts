import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedsignupComponent } from './detailedsignup.component';

describe('DetailedsignupComponent', () => {
  let component: DetailedsignupComponent;
  let fixture: ComponentFixture<DetailedsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
