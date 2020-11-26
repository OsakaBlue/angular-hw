import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

products: Product [] = [{
  name: 'Product title',
  desc: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
  price: 21
}, {
  name: 'Product title',
  desc: 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
  price: 21
}]

}