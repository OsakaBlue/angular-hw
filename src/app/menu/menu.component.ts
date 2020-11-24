import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Menu } from '../menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

@Input() menuHeader: Menu[];
@Output() changePage = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
    console.log(this.menuHeader);
  }


  onClickMenu(url: string) {
// console.log(url);
this.changePage.emit(url);
  }
}
