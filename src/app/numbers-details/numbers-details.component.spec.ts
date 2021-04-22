import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersDetailsComponent } from './numbers-details.component';

describe('NumbersDetailsComponent', () => {
  let component: NumbersDetailsComponent;
  let fixture: ComponentFixture<NumbersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumbersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
