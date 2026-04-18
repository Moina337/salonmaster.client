import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSalon } from './liste-salon';

describe('ListeSalon', () => {
  let component: ListeSalon;
  let fixture: ComponentFixture<ListeSalon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeSalon],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeSalon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
