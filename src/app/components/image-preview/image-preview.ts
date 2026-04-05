import { Component, computed, effect, HostListener, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-image-preview',
  imports: [],
  templateUrl: './image-preview.html',
  styleUrl: './image-preview.scss',
})
export class ImagePreview {
  selectedFile = input<File | undefined>(undefined);
  onSelectedFileRemoved = output<void>();
  
  readonly MIN_SCALE = 1;
  readonly MAX_SCALE = 5;
  readonly STEP = 0.1;

  scale = signal(1);
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

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (!event.ctrlKey) {
      return;
    }

    event.preventDefault();

    const delta = event.deltaY > 0 ? -this.STEP : this.STEP;
    const newScale = Math.min(Math.max(this.scale() + delta, this.MIN_SCALE), this.MAX_SCALE);

    this.scale.set(newScale);
  }

  resetZoom() {
    this.scale.set(1);
  }
}
