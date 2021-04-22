import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangesDetailsComponent } from './ranges-details.component';

describe('RangesDetailsComponent', () => {
  let component: RangesDetailsComponent;
  let fixture: ComponentFixture<RangesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
