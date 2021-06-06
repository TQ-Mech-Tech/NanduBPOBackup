import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import {MatDialog} from '@angular/material/dialog';
import { UpdateCustomerProfileComponent } from './update-customer-profile/update-customer-profile.component';
import { CustomerViewProfileService } from './view-customer-profile.service';
import { BPOcontrolService } from '../bpo-control.service';

interface CustomerProfile{
  _id:string;
  firstName:string;
  middleName:string;
  lastName:string;
  address:string;
}

const ELEMENT_DATA: CustomerProfile[] = [];

@Component({
  selector: 'app-view-customer-profile-table',
  templateUrl: './view-customer-profile-table.component.html',
  styleUrls: ['./view-customer-profile-table.component.css']
})
export class ViewCustomerProfileTableComponent implements OnInit {

  constructor(public dialog: MatDialog,private custUpdateProfileService:CustomerViewProfileService, private bPOcontrolService:BPOcontrolService,) { }


  displayedColumns: string[] = ['id','firstname','middlename','lastname','address'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // custID(custIDvalue){
  //   console.log(custIDvalue.value);
  // }

  openDialog(inputValue) {
    console.log(inputValue.value);
    this.custUpdateProfileService.putCustUpdateId(inputValue.value);
    const dialogRef = this.dialog.open(UpdateCustomerProfileComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



  ngOnInit(): void {
    this.bPOcontrolService.getCustomerProfileTable().subscribe( profileList => {
      console.log("the customer Profile List is ",profileList.message);
      this.dataSource = profileList.message;
    });
  }

}
