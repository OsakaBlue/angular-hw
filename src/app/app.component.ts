import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

toDoList = [{
  name: 'Прокинутись',
  done: true
}, {
  name: 'Сходити в душ',
  done: true
}, {
  name: 'Поснідати',
  done: false
}, {
  name: 'Зробити дз',
  done: false
}, {
  name: 'Погуляти',
  done: false
}];



}