import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageUploader } from './components/image-uploader/image-uploader';
import { ImagePreview } from "./components/image-preview/image-preview";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImageUploader, ImagePreview],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('budged-tracker');
  selectedFile = signal<File | undefined>(undefined);
}
