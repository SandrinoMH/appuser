import { UsersService } from './../services';
import { Component, EventEmitter, Output } from '@angular/core';
import { Topmenu } from '../topmenu/topmenu';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [Topmenu, FormsModule],
  template: `
    <section class="navbar">
      <input
        type="text"
        placeholder="Filtrer par utilisateur"
        [(ngModel)]="searchText"
        (ngModelChange)="onSearch($event)"
        class="basic-input"
      />
      <app-topmenu />
    </section>
  `,
  styleUrl: './navbar.css',
})
export class Navbar {
  searchText = '';

  constructor(private usersService: UsersService) {}

  onSearch(value: string) {
    this.usersService.updateSearch(value);
  }
}
