import { UsersService } from './../services';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cardUserInterface } from '../carduser/carduser.model';
import { Popup } from '../popup/popup';
import { Galery } from '../galery/galery';

@Component({
  selector: 'app-details',
  imports: [Popup, Galery],
  template: `
    <div class="card">
      <div class="card-info">
        <img [src]="user?.photo" alt="{{ user?.name }}" class="user-photo" />
        <h2 class="name">{{ user?.name }}</h2>
      </div>
      <p class="job">{{ user?.job }}</p>

      @for (t of user?.tag; track t){
      <span class="tag">{{ t }}</span>
      }

      <section class="section-detail">
        <div class="detail-content">
          <p>{{ user?.details }}</p>
        </div>

        <app-galery
          class="galery-content"
          [images]="user?.galery"
          (imageSelected)="openDialog($event)"
        />
      </section>
    </div>

    <app-popup [selectedImage]="selectedImage" (closed)="selectedImage = null" />
  `,
  styleUrl: './details.css',
})
export class Details {
  myroute: ActivatedRoute = inject(ActivatedRoute);
  usersService: UsersService = inject(UsersService);
  user: cardUserInterface | undefined;

  selectedImage!: string | null;

  constructor() {
    const id = Number(this.myroute.snapshot.params['id']);
    this.user = this.usersService.getUserById(id);
  }

  openDialog(imageUrl: string) {
    this.selectedImage = imageUrl;
  }
}
