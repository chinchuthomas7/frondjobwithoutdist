import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailveriemployerComponent } from './detailveriemployer.component';

describe('DetailveriemployerComponent', () => {
  let component: DetailveriemployerComponent;
  let fixture: ComponentFixture<DetailveriemployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailveriemployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailveriemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
