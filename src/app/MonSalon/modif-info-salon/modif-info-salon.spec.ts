import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifInfoSalon } from './modif-info-salon';

describe('ModifInfoSalon', () => {
  let component: ModifInfoSalon;
  let fixture: ComponentFixture<ModifInfoSalon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifInfoSalon],
    }).compileComponents();

    fixture = TestBed.createComponent(ModifInfoSalon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
