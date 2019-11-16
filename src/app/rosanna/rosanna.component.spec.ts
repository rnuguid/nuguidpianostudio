import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RosannaComponent } from './rosanna.component';

describe('RosannaComponent', () => {
  let component: RosannaComponent;
  let fixture: ComponentFixture<RosannaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosannaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosannaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
