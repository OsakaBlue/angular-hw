import { Component } from '@angular/core';
import { Menu } from './menu.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

menus: Menu[] = [{
  name: 'Home',
  url: '/home'
}, {
  name: 'About',
  url: '/about'
}, {
  name: 'Contact',
  url: '/contact'
}];

changePage(event: string) {
  console.log(event);
}

}
