import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseLimitSugesstionBoxComponent } from './purchase-limit-sugesstion-box.component';

describe('PurchaseLimitSugesstionBoxComponent', () => {
  let component: PurchaseLimitSugesstionBoxComponent;
  let fixture: ComponentFixture<PurchaseLimitSugesstionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseLimitSugesstionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseLimitSugesstionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
