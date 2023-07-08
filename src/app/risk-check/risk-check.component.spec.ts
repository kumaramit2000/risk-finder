import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskCheckComponent } from './risk-check.component';

describe('RiskCheckComponent', () => {
  let component: RiskCheckComponent;
  let fixture: ComponentFixture<RiskCheckComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskCheckComponent]
    });
    fixture = TestBed.createComponent(RiskCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
