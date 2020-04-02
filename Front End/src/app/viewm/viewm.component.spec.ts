import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmComponent } from './viewm.component';

describe('ViewmComponent', () => {
  let component: ViewmComponent;
  let fixture: ComponentFixture<ViewmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
