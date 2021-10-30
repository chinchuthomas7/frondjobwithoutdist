import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedsignfacultyComponent } from './detailedsignfaculty.component';

describe('DetailedsignfacultyComponent', () => {
  let component: DetailedsignfacultyComponent;
  let fixture: ComponentFixture<DetailedsignfacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedsignfacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedsignfacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
