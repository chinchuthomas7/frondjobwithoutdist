import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcreatedjobsComponent } from './ecreatedjobs.component';

describe('EcreatedjobsComponent', () => {
  let component: EcreatedjobsComponent;
  let fixture: ComponentFixture<EcreatedjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcreatedjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcreatedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
