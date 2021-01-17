import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.less']
})
export class ProductsListComponent implements OnInit {

  productItems = [
    {id:1, title:'hello', description:'somethingsomething', imageLink:'', purchaseLink:''},
    {id:2, title:'hello', description:'somethingsomething', imageLink:'', purchaseLink:''},
    {id:3, title:'hello', description:'somethingsomething', imageLink:'', purchaseLink:''},
];
  constructor() { }

  ngOnInit(): void {
  }

}
