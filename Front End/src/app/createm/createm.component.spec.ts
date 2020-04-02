import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemComponent } from './createm.component';

describe('CreatemComponent', () => {
  let component: CreatemComponent;
  let fixture: ComponentFixture<CreatemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
