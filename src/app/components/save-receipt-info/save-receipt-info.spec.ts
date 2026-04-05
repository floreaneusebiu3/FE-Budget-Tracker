import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveReceiptInfo } from './save-receipt-info';

describe('SaveReceiptInfo', () => {
  let component: SaveReceiptInfo;
  let fixture: ComponentFixture<SaveReceiptInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaveReceiptInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(SaveReceiptInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
