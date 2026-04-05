import { Component, computed, effect, input } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  imports: [],
  templateUrl: './image-preview.html',
  styleUrl: './image-preview.scss',
})
export class ImagePreview {
selectedFile = input<File | undefined>(undefined);

  // Computed signal to create a preview URL
  // It only runs if the file is an image
  imagePreview = computed(() => {
    console.log('Computing image preview URL');
    const file = this.selectedFile();
    if (file && file.type.startsWith('image/')) {
      return URL.createObjectURL(file);
    }
    return undefined;
  });

  // Clean up memory when the component is destroyed or file changes
  // URL.createObjectURL creates a memory leak if not revoked
  constructor() {
    effect((onCleanup) => {
      const url = this.imagePreview();
      onCleanup(() => {
        if (url) URL.revokeObjectURL(url);
      });
    });
  }
}
