import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndveligadminComponent } from './indveligadmin.component';

describe('IndveligadminComponent', () => {
  let component: IndveligadminComponent;
  let fixture: ComponentFixture<IndveligadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndveligadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndveligadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
