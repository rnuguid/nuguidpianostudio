import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoracioComponent } from './horacio.component';

describe('HoracioComponent', () => {
  let component: HoracioComponent;
  let fixture: ComponentFixture<HoracioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoracioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoracioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
