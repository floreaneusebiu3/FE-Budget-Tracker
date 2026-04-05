import { Component, signal } from '@angular/core';
import { ImagePreview } from '../../components/image-preview/image-preview';
import { ImageUploader } from '../../components/image-uploader/image-uploader';
import { SaveReceiptInfo } from '../../components/save-receipt-info/save-receipt-info';

@Component({
  selector: 'app-upload-receipt-page',
  imports: [ImageUploader, ImagePreview, SaveReceiptInfo],
  templateUrl: './upload-receipt-page.html',
  styleUrl: './upload-receipt-page.scss',
})
export class UploadReceiptPage {
  protected readonly title = signal('budged-tracker');
  selectedFile = signal<File | undefined>(undefined);
}
