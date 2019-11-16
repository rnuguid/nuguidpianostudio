import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowDayPolicyComponent } from './snow-day-policy.component';

describe('SnowDayPolicyComponent', () => {
  let component: SnowDayPolicyComponent;
  let fixture: ComponentFixture<SnowDayPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowDayPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowDayPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
