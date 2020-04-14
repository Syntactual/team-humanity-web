import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VouchedIdComponent } from './vouched-id.component';

describe('VouchedIdComponent', () => {
  let component: VouchedIdComponent;
  let fixture: ComponentFixture<VouchedIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VouchedIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VouchedIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
