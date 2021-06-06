import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from "rxjs";
import {MatDialog} from '@angular/material/dialog';
import { ViewCustomerOrderService } from './view-customer-order.service';
import { UpdateOrderTracingComponent } from './update-order-tracing/update-order-tracing.component';
import { BPOcontrolService } from '../bpo-control.service';
import { Orders } from './customerReceviedOrders.model';
import { Router } from '@angular/router';
import { TruncatePipe } from './truncate.pipe';


// interface Order{
//   orderDate:string;
//   totalWeight:string;
//   totalTax:string;
//   deliveryCharges:string;
//   FinalAmount:string;
//   userID:string;
//   razorPaymentID:string;
//   status:string;
//   track:string;
//   preOrder:string;

// }


// const ELEMENT_DATA: Order[] = [
//   {
//   orderDate:"09/05/2021",
//   totalWeight:"23 kg",
//   totalTax:"15",
//   deliveryCharges:"10",
//   FinalAmount:"115",
//   userID:"XY1234X5",
//   razorPaymentID:"12dhdhfwq445",
//   status:'paid',
//   track:'notAvailable',
//   preOrder:'besan flour',
//   },
//   {
//   orderDate:"09/05/2021",
//   totalWeight:"23 kg",
//   totalTax:"15",
//   deliveryCharges:"10",
//   FinalAmount:"115",
//   userID:"XY1234X5",
//   razorPaymentID:"12dhdhfwq445",
//   status:'paid',
//   track:'notAvailable',
//   preOrder:'besan flour',
//   },
//   {
//     orderDate:"09/05/2021",
//     totalWeight:"23 kg",
//     totalTax:"15",
//     deliveryCharges:"10",
//     FinalAmount:"115",
//     userID:"XY1234X5",
//     razorPaymentID:"12dhdhfwq445",
//     status:'paid',
//     track:'notAvailable',
//     preOrder:'besan flour',
//   }
// ]

const ELEMENT_DATA: Orders[] = [];

@Component({
  selector: 'app-view-customer-order',
  templateUrl: './view-customer-order.component.html',
  styleUrls: ['./view-customer-order.component.css']
})
//
export class ViewCustomerOrderComponent implements OnInit {

  orderDeails:Observable<Orders[]>;
  truncatePipe:TruncatePipe
  constructor(private bPOcontrolService:BPOcontrolService, public tracingDialog: MatDialog, public dialog: MatDialog,private viewCustomerorderservice:ViewCustomerOrderService, private router:Router) { }
  
  openTracingPage(){
    this.tracingDialog.open(UpdateOrderTracingComponent);
   }

  expression=true;
  displayedColumns: string[] = ['orderDate','totalWeight','totalTax','deliveryCharges','FinalAmount','userID',
     'razorPaymentID','status','track','productDetails'];
  
  
  
     dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  opendComp(inputValue){

   

  }

  ngOnInit(): void {
    this.reloadOrdersData();
    this.bPOcontrolService.getCustomersReceivedOrdersBPO().subscribe(dataInfo =>{
      console.log("Your order Info Data is For Bpo is ", dataInfo.dataInfo);
      this.dataSource = dataInfo.dataInfo;
    })
  }
    
  reloadOrdersData(){
    this.bPOcontrolService.getCustomersReceivedOrdersBPO().subscribe(orders =>{
       this.orderDeails = orders.dataInfo;
       console.log("your OrderDetails is ",this.orderDeails )
    });
  }
  OrderDetails(co_ID){
    if(this.expression){
      this.viewCustomerorderservice.putCustUpdateId(co_ID.value);
    }
    this.expression = !this.expression;
    

    // this.router.navigate(['orderDetials', co_ID]);
  }
}


// import { Component, OnInit } from '@angular/core';
// import {MatTableDataSource} from '@angular/material/table';

// import {MatDialog} from '@angular/material/dialog';
// import { ViewCustomerOrderService } from './view-customer-order.service';
// import { UpdateOrderTracingComponent } from './update-order-tracing/update-order-tracing.component';
// interface Order{
//   orderDate:string;
//   totalWeight:string;
//   totalTax:string;
//   deliveryCharges:string;
//   FinalAmount:string;
//   userID:string;
//   razorPaymentID:string;
//   status:string;
//   track:string;
//   preOrder:string;
//   productDetails:string;
// }


// const ELEMENT_DATA: Order[] = [
//   {

//   orderDate:"233",
//   totalWeight:"23 kg",
//   totalTax:"15",
//   deliveryCharges:"10",
//   FinalAmount:"115",
//   userID:"XY1234X5",
//   razorPaymentID:"12dhdhfwq445",
//   status:'paid',
//   track:'notAvailable',
//   preOrder:'besan flour',
//  
//   },
//   {
//     orderDate:"233",
//     totalWeight:"23 kg",
//     totalTax:"15",
//     deliveryCharges:"10",
//     FinalAmount:"115",
//     userID:"XY1234X5",
//     razorPaymentID:"12dhdhfwq445",
//     status:'paid',
//     track:'notAvailable',
//     preOrder:'besan flour',
//   
//   },
//   {
//     orderDate:"233",
//     totalWeight:"23 kg",
//     totalTax:"15",
//     deliveryCharges:"10",
//     FinalAmount:"115",
//     userID:"XY1234X5",
//     razorPaymentID:"12dhdhfwq445",
//     status:'paid',
//     track:'notAvailable',
//     preOrder:'besan flour',
//     productDetails:''
    
//   }
// ]


// @Component({
//   selector: 'app-view-customer-order',
//   templateUrl: './view-customer-order.component.html',
//   styleUrls: ['./view-customer-order.component.css']
// })
// //
// export class ViewCustomerOrderComponent implements OnInit {
//   constructor( public tracingDialog: MatDialog, public dialog: MatDialog,private viewCustomerorderservice:ViewCustomerOrderService) { }
  
//   openTracingPage(){
//     this.tracingDialog.open(UpdateOrderTracingComponent);
//    }
//   expression=true;
//   displayedColumns: string[] = ['ordersDate','totalWeight','totalTax','deliveryCharges','FinalAmount','userID',
//   'razorPaymentID','status','track','preOrder','productDetails'];
//   dataSource = new MatTableDataSource(ELEMENT_DATA);
//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();
//   }


//   opendComp(inputValue){

//     if(this.expression){
//       this.viewCustomerorderservice.putCustUpdateId(inputValue.value);
//     }
//     this.expression = !this.expression;


//   }

//   ngOnInit(): void {
//   }

// }
