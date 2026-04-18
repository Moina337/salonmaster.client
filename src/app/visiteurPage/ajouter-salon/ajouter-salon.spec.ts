import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterSalon } from './ajouter-salon';

describe('AjouterSalon', () => {
  let component: AjouterSalon;
  let fixture: ComponentFixture<AjouterSalon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterSalon],
    }).compileComponents();

    fixture = TestBed.createComponent(AjouterSalon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
