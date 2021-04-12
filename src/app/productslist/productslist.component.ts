import { Component, OnInit } from '@angular/core';
import { IProducts } from '../IProducts';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
propertiees:Array<IProducts>
  constructor(private housingservice:HousingService) { }

  ngOnInit(): void {
    this.housingservice.getAllProperties().subscribe(
      data=>{
        this.propertiees=data;
      }
    )
  }

}
