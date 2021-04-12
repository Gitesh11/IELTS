import { Component, Input, OnInit } from '@angular/core';
import{IProducts} from '../IProducts';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() product:IProducts;
// properties :any ={
//   "Id":2,
//   "WritingTask":"2 Writing task",
//   "Price":"$4.99"
// }
  constructor() { }

  ngOnInit(): void {
  }

}
