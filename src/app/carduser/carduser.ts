import { Component, Input } from '@angular/core';
import { cardUserInterface } from './carduser.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carduser',
  imports: [RouterModule],
  template: `
    <div class="user-cards">
      @for (user of userInfo; track user.id) {
      <a [routerLink]="['/detail', user.id]">
        <div class="card">
          <div class="card-info">
            <img [src]="user.photo" alt="{{ user.name }}" class="user-photo" />
            <h2 class="name">{{ user.name }}</h2>
          </div>
          <p class="job">{{ user.job }}</p>

          @for (t of user.tag; track t){
          <span class="tag">{{ t }}</span>

          }
        </div></a
      >
      }
    </div>
  `,
  styleUrl: './carduser.css',
})
export class Carduser {
  @Input() userInfo!: cardUserInterface[];
}
