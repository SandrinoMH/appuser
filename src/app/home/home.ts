import { Component, computed, inject } from '@angular/core';
import { Carduser } from '../carduser/carduser';
import { UsersService } from '../services';

@Component({
  selector: 'app-home',
  imports: [Carduser],
  template: `<app-carduser [userInfo]="filteredUsers()" />
    @if (isNotFound()) {
    <div class="notfound">
      <img class="imgnot" src="not.png" alt="" />
      <p>Oups, cette utilisateur n'existe pas</p>
    </div>
    }`,
  styleUrls: ['./home.css'],
})
export class Home {
  private usersService = inject(UsersService);

  users = this.usersService.getUsers();

  filteredUsers = computed(() => {
    const searchText = this.usersService.filtre().toLowerCase();
    return this.users.filter((user) => user.name.toLowerCase().includes(searchText));
  });

  isNotFound = computed(() => {
    const searchText = this.usersService.filtre().toLowerCase();
    return searchText !== '' && this.filteredUsers().length === 0;
  });
}
