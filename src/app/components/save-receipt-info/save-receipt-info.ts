import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { CommonModule, DecimalPipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

interface Item {
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

@Component({
  selector: 'app-save-receipt-info',
  imports: [CommonModule,     // Provides the 'number' pipe and others
    FormsModule,
    TableModule,
    ButtonModule],
  templateUrl: './save-receipt-info.html',
  styleUrl: './save-receipt-info.scss',
})
export class SaveReceiptInfo {
  items = signal<Item[]>([
    { name: 'Sample item', quantity: 1, unitPrice: 10, totalPrice: 10 }
  ]);

  subtotal = signal(10);

  updateTotal(item: Item) {
    item.totalPrice = item.quantity * item.unitPrice;
    this.updateSubtotal();
  }

  updateSubtotal() {
    const total = this.items().reduce((sum, i) => sum + i.totalPrice, 0);
    this.subtotal.set(total);
  }

  addItem() {
    this.items.set([
      ...this.items(),
      { name: '', quantity: 1, unitPrice: 0, totalPrice: 0 }
    ]);
  }

  removeItem(index: number) {
    const updated = [...this.items()];
    updated.splice(index, 1);
    this.items.set(updated);
    this.updateSubtotal();
  }
}
