import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { BPOcontrolService } from '../bpo-control.service';
import { FixRefundData } from './fixRefund.model';


const ELEMENT_DATA: FixRefundData[] = [];
const dataTakers:any = [];
@Component({
  selector: 'app-fix-customer-refund',
  templateUrl: './fix-customer-refund.component.html',
  styleUrls: ['./fix-customer-refund.component.css','./refund.css']

})
export class FixCustomerRefundComponent implements OnInit {

  tableisEmpty:boolean = true;
  dataTaker:any;
  ErrorTaker:string;
  propOwn: any;
   
  constructor(private bPOcontrolService:BPOcontrolService) { }

  displayedColumns: string[] = ['orderId', 'custID', 'orderPlaceDate', 'razorPayID','approveBtn' ,'cancelBtn'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


public ngOnInit(): void {
    
 this.fetchRufundRequestist();

  }

  fetchRufundRequestist(){
    this.bPOcontrolService.fetchRefundInfo().subscribe(refundInfo =>
      {
      //  console.log("your refund request data is ", refundInfo.message )
       this.dataTaker = refundInfo.message;
      console.log("your type of", typeof this.dataTaker , "and your value is ", this.dataTaker.length);
      
      if(typeof this.dataTaker === 'string')
      {
         console.log("your request for refund  ", this.dataTaker);
         this.tableisEmpty = false;
      }
      else
      {
        this.dataSource = this.dataTaker;
      }
    },Error =>{
      console.log('your response error from backend', Error.error.message)
    });
   }



  approvedReq(inputValue){
    console.log(`request of id ${inputValue.value} is approved.`);
    this.bPOcontrolService.addCustomerApprovedRefund(inputValue.value).subscribe(data =>{
      console.log("Your Approve Response Is ", data.message);
    },Error => {
      console.log(Error.error.message);
    });
    this.fetchRufundRequestist();
  }

  cancleReq(inputValue2){
   
    console.log(`request of id ${inputValue2.value} is cancle.`);
    this.bPOcontrolService.addCancelRufund(inputValue2.value).subscribe(data =>{
      console.log("your response from backend is ", data.message , );
    },Error => {
      console.log(Error.error.message);
    });
    this.fetchRufundRequestist();
  }

}








// import { Component, OnInit } from '@angular/core';
// import {MatTableDataSource} from '@angular/material/table';

// interface RefundData{
//   id:string;
//   custProfileId:string;
//   Orderid:string;
//   TotalAmount:string;
//   RefundRequestedDate:string;
//   RefundApprovedDate:string;
//   //OrderStatus:string;// paid// pending//
//   //RefundStatus:string;//approved or cancle
//   //paymentid:string// this will come from razorpay

// }


// const ELEMENT_DATA:RefundData[]=[{
//   id:"121",
//   custProfileId:"0232",
//   Orderid:"002",
//   TotalAmount:"444",
//   RefundRequestedDate:"32/jan/2021",
//   RefundApprovedDate:"35/jan/2021"
// }];

// @Component({
//   selector: 'app-fix-customer-refund',
//   templateUrl: './fix-customer-refund.component.html',
//   styleUrls: ['./fix-customer-refund.component.css']
// })
// export class FixCustomerRefundComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }
//               // id:string;
//               // custProfileId:string;
//               // Orderid:string;
//               // TotalAmount:string;
//               // RefundRequestedDate:string;
//               // RefundApprovedDate:string;
//   displayedColumns: string[] = ['id','custProfileId','Orderid','TotalAmount','RefundRequestedDate','RefundApprovedDate','action-btn1','action-btn2'];

//   dataSource = new MatTableDataSource(ELEMENT_DATA);

//   approvedReq(inputValue){
//     console.log(`request of id ${inputValue.value} is approved.`)
//   }

//   cancleReq(inputValue){
//     console.log(`request of id ${inputValue.value} is cancle.`)
//   }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     //this.dataSource.filter = filterValue.trim().toLowerCase();
//   }

// }


















