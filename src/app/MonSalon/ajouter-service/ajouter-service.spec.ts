import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterService } from './ajouter-service';

describe('AjouterService', () => {
  let component: AjouterService;
  let fixture: ComponentFixture<AjouterService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterService],
    }).compileComponents();

    fixture = TestBed.createComponent(AjouterService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
