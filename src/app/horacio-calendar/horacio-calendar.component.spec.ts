import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoracioCalendarComponent } from './horacio-calendar.component';

describe('HoracioCalendarComponent', () => {
  let component: HoracioCalendarComponent;
  let fixture: ComponentFixture<HoracioCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoracioCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoracioCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
