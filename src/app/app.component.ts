import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    defaultSort = 'asc';

  nowDate = new Date();
  
  users: User[] = [{
    name: 'User 1',
    age: 20
  }, {
    name: 'User 2',
    age: 32
  }, {
    name: 'User 3',
    age: 30
  }, {
    name: 'User 4',
    age: 15
  }];

  size = 3242.464575475;

  changeSort() {
    this.defaultSort = this.defaultSort === 'asc' ? 'desc' : 'asc';
  }

}
