import { Component, OnInit } from '@angular/core';

type User = {
  name: string, 
  age: number,
  phone?: string
}


// enum RoleBlog {
//     Admin,
//     Editor,
//     viewer
// }



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

// name: string;

//   set name (value) {
//   if (value.length > 5) {
//     this._name = value.slice(0, 5);
//   } else {
//     this._name = value;
//   }
// }



  // text: string;

  age = 25;

  // counterText: any;
  //   counterText:unknown;
    
// level: number | string;

  arrNumber: number [] = [3, 5, 10];
  array: [number, string] = [10, 'ten'];

  user1: User = {
    name: 'Bob',
    age: 34,
    phone: '564455846'
  }

  user2: User = {
    name: 'Alice',
    age: 24
  }

  users: User[];

  constructor() {
    // this.text = 'some string';
    // this.age = true;

    // this.counterText = 20;
    // this.counterText = 'test';
      // this.level = 3;
      // this.level = 'strong';
      this.users = [{
        name: 'User1',
        age: 23
      }, {
        name: 'User2',
        age: 30
      }]

      console.log(this.diffDate(new Date(), new Date(2020, 10, 21)));
      console.log(calcPrice(100, 30))
  }


  diffDate(date1: Date, date2: Date): number {
    const diff = +date2 - +date1;
    console.log(diff);
    return +(diff / 1000 / 60 / 60).toFixed(2);
  }


  calcPrice(price: number, sale:number): number {
    return price - price * sale / 100;
  }


}