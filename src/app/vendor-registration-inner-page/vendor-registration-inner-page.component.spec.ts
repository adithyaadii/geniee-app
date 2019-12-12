import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRegistrationInnerPageComponent } from './vendor-registration-inner-page.component';

describe('VendorRegistrationInnerPageComponent', () => {
  let component: VendorRegistrationInnerPageComponent;
  let fixture: ComponentFixture<VendorRegistrationInnerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorRegistrationInnerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorRegistrationInnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
