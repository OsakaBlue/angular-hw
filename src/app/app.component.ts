import { Component, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { Menu } from './menu.model';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('menu', {static:false}) test: ElementRef;
  @ViewChild(MenuComponent) menuComponent: MenuComponent;

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


ngAfterViewInit() {
  console.log(this.menuComponent.position);
  this.test.nativeElement.style.color = 'red';
}
}
