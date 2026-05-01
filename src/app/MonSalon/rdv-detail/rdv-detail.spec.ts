import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvDetail } from './rdv-detail';

describe('RdvDetail', () => {
  let component: RdvDetail;
  let fixture: ComponentFixture<RdvDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RdvDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(RdvDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
