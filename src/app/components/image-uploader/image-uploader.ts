import { Component, output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'app-image-uploader',
    imports: [
        FileUploadModule, ToastModule,
    ],
    providers: [MessageService],
    templateUrl: './image-uploader.html',
    styleUrl: './image-uploader.scss',
})
export class ImageUploader {
    onFileSelected = output<File>();

    onFileChange(event: any) {
        this.emitSelectedFile(event.target.files ? Array.from(event.target.files) : undefined);
    }

    onDragOver(event: DragEvent) {
        event.preventDefault();
    }

    onDrop(event: DragEvent) {
        event.preventDefault();

        if (event.dataTransfer?.files) {
            const files = Array.from(event.dataTransfer.files);
            this.emitSelectedFile(files);
        }
    }

    private emitSelectedFile(files?: File[]) {
        if (files && files.length > 0) {
            this.onFileSelected.emit(files[0]);
        }
    }
}