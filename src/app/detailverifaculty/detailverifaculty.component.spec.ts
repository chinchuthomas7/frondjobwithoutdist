import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailverifacultyComponent } from './detailverifaculty.component';

describe('DetailverifacultyComponent', () => {
  let component: DetailverifacultyComponent;
  let fixture: ComponentFixture<DetailverifacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailverifacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailverifacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
