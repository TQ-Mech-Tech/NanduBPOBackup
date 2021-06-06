import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { BPOcontrolService } from '../../bpo-control.service';

export interface RefundData{
  _id:string
  approveDate:string;
  custID:string;
  orderId:string;
  orderPlaceDate:string;
  razorPayID:string;
  
}

const ELEMENT_DATA:RefundData[]=[];

@Component({
  selector: 'app-view-approved-refund',
  templateUrl: './view-approved-refund.component.html',
  styleUrls: ['./view-approved-refund.component.css']
})
export class ViewApprovedRefundComponent implements OnInit {

  constructor(private bPOcontrolService:BPOcontrolService) { }

  displayedColumns: string[] = ['id','approveDate','custId','orderId',
  'orderPlaceDate','razorPayId'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  ngOnInit(): void {
    this.bPOcontrolService.getApprovedRefundData().subscribe(approvedRefund => {
       console.log("your approved data is ",approvedRefund.message );
       this.dataSource = approvedRefund.message;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
