import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndveligemployerComponent } from './indveligemployer.component';

describe('IndveligemployerComponent', () => {
  let component: IndveligemployerComponent;
  let fixture: ComponentFixture<IndveligemployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndveligemployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndveligemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
