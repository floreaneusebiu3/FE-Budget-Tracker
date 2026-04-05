import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadReceiptPage } from './upload-receipt-page';

describe('UploadReceiptPage', () => {
  let component: UploadReceiptPage;
  let fixture: ComponentFixture<UploadReceiptPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadReceiptPage],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadReceiptPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
