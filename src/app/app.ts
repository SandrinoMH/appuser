import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { UsersService } from './services';
import { cardUserInterface } from './carduser/carduser.model';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Navbar],
  template: `
    <section class="my-body">
      <a routerLink="/">
        <h1>User</h1>
      </a>
      <app-navbar />
      <router-outlet />
    </section>
  `,
  styleUrl: './app.css',
})
export class App {
  constructor(private usersService: UsersService) {}
  onSearch(value: string) {
    this.usersService.updateSearch(value);
  }
}
