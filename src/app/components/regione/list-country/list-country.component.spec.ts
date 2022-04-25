import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCountryComponent } from './list-country.component';

describe('RegionalListComponent', () => {
  let component: ListCountryComponent;
  let fixture: ComponentFixture<ListCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
