import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailverialumniComponent } from './detailverialumni.component';

describe('DetailverialumniComponent', () => {
  let component: DetailverialumniComponent;
  let fixture: ComponentFixture<DetailverialumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailverialumniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailverialumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
