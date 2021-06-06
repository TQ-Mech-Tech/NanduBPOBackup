import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { BPOcontrolService } from '../../bpo-control.service';

export interface RefundData{
  _id:string
  cancleDate:string;
  custID:string;
  orderId:string;
  orderPlaceDate:string;
  razorPayID:string;
  
}

const ELEMENT_DATA:RefundData[]=[];

@Component({
  selector: 'app-view-cancle-refund',
  templateUrl: './view-cancle-refund.component.html',
  styleUrls: ['./view-cancle-refund.component.css']
})
export class ViewCancleRefundComponent implements OnInit {
 

  constructor(private bPOcontrolService:BPOcontrolService) { }

  displayedColumns: string[] = ['id','cancleDate','custId','orderId',
  'orderPlaceDate','razorPayId'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit(): void {
    this.bPOcontrolService.getCancelRefundRequestList().subscribe(
      cancelRefundList => { 
        console.log("your cancel refund List ", cancelRefundList.message);
        this.dataSource = cancelRefundList.message;
      }, Error =>{
        console.log(Error.error.message)
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
