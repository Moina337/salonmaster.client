import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRdv } from './liste-rdv';

describe('ListeRdv', () => {
  let component: ListeRdv;
  let fixture: ComponentFixture<ListeRdv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeRdv],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeRdv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
