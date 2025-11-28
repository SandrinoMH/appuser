import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-galery',
  imports: [],
  template: `
    <div class="{{ isPopUp ? 'galery-content-popup' : 'galery-content' }}">
      @for(g of images; track g){
      <img
        [src]="g"
        class="{{ isPopUp ? 'image-galery-popup' : 'image-galery' }}"
        (click)="openDialog(g)"
      />
      }
    </div>
  `,
  styleUrl: './galery.css',
})
export class Galery {
  @Input() images?: string[];
  @Input() isPopUp: boolean = false;
  @Output() imageSelected = new EventEmitter<string>();

  openDialog(imageUrl: string) {
    this.imageSelected.emit(imageUrl);
  }
}
