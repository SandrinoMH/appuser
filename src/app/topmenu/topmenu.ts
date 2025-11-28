import { Component } from '@angular/core';

@Component({
  selector: 'app-topmenu',
  imports: [],
  template:`
  <section>
    <ul class="horizontal-menu">
    <li><a href="">Reputation</a></li>
    <li><a href="">New users</a></li>
    <li><a href="">Voters</a></li>
    <li><a href="">Editors</a></li>
    <li><a href="">Moderators</a></li>
  </ul>
  </section>
  `,
  styleUrl: './topmenu.css'
})
export class Topmenu {

}
