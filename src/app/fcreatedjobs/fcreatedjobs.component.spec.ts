import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcreatedjobsComponent } from './fcreatedjobs.component';

describe('FcreatedjobsComponent', () => {
  let component: FcreatedjobsComponent;
  let fixture: ComponentFixture<FcreatedjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcreatedjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FcreatedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
