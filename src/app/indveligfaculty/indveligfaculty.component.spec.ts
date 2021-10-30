import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndveligfacultyComponent } from './indveligfaculty.component';

describe('IndveligfacultyComponent', () => {
  let component: IndveligfacultyComponent;
  let fixture: ComponentFixture<IndveligfacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndveligfacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndveligfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
