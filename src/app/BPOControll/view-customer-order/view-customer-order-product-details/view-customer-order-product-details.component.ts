import { Component, OnInit } from '@angular/core';
import { ViewCustomerOrderService } from '../view-customer-order.service';
import {MatTableDataSource} from '@angular/material/table';
import { BPOcontrolService } from '../../bpo-control.service';

interface OrderedProductDetails{
  _id:string;
  productName:string;
  grindingType:string;
  weight:string;
  price:string;
  serviceCharge:string;
  totalAmount:string;
  pickupdate:string;
  droppingdate:string;

}

const ELEMENT_DATA: OrderedProductDetails[] = [ ];


@Component({
  selector: 'app-view-customer-order-product-details',
  templateUrl: './view-customer-order-product-details.component.html',
  styleUrls: ['./view-customer-order-product-details.component.css']
})
export class ViewCustomerOrderProductDetailsComponent implements OnInit {
  dataSource = new MatTableDataSource(ELEMENT_DATA);
                 
  displayedColumns: string[] = ['_id','productName','grindingType','weight','price','serviceCharge','totalAmount','pickupdate','droppingdate'];



  co_ID:string;


  constructor(private viewCustomerorderservice:ViewCustomerOrderService, private bPOcontrolService:BPOcontrolService) {

   }

  ngOnInit(): void {
    this.co_ID = this.viewCustomerorderservice.getCustUpdateId();
    console.log('your id is ',this.co_ID);
    this.bPOcontrolService.ViewCustomerOrderProductDetailsComponent(this.co_ID).subscribe(OrderDetails =>{
      console.log("your co_ID is", OrderDetails.data );
      this.dataSource =  OrderDetails.data ;
    });

  }

}
