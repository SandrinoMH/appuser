import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Galery } from '../galery/galery';
import { cardUserInterface } from '../carduser/carduser.model';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services';

@Component({
  selector: 'app-popup',
  template: `
    @if(selectedImage){
    <div class="overlay" (click)="closeDialog()">
      <div class="popup" (click)="$event.stopPropagation()">
        <img [src]="selectedImage" class="popup-img" />
        <img src="close.svg" alt="close" class="close-icon" (click)="closeDialog()" />
        <div class="galery-container">
          <app-galery
            class="galery-content"
            [images]="user?.galery"
            (imageSelected)="openDialog($event)"
            [isPopUp]="true"
          />
        </div>
      </div>
    </div>
    }
  `,
  styleUrl: './popup.css',
  imports: [Galery],
})
export class Popup {
  myroute: ActivatedRoute = inject(ActivatedRoute);
  userService = inject(UsersService);

  @Input() selectedImage: string | null = null;
  @Output() closed = new EventEmitter();

  user: cardUserInterface | undefined;

  constructor() {
    const id = Number(this.myroute.snapshot.params['id']);
    this.user = this.userService.getUserById(id);
  }

  openDialog(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeDialog() {
    this.closed.emit();
  }
}
