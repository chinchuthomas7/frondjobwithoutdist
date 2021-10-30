import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedsignemployerComponent } from './detailedsignemployer.component';

describe('DetailedsignemployerComponent', () => {
  let component: DetailedsignemployerComponent;
  let fixture: ComponentFixture<DetailedsignemployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedsignemployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedsignemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
