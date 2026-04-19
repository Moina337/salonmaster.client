import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifService } from './modif-service';

describe('ModifService', () => {
  let component: ModifService;
  let fixture: ComponentFixture<ModifService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifService],
    }).compileComponents();

    fixture = TestBed.createComponent(ModifService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
