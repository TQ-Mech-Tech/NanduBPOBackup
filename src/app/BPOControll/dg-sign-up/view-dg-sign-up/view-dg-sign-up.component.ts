import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { BPOcontrolService } from '../../bpo-control.service';

import { DeliveryManSignUPData } from '../deliverySignUp.model';

const ELEMENT_DATA:DeliveryManSignUPData[]=[]

@Component({
  selector: 'app-view-dg-sign-up',
  templateUrl: './view-dg-sign-up.component.html',
  styleUrls: ['./view-dg-sign-up.component.css']
})
export class ViewDgSignUpComponent implements OnInit {

  constructor(public bPOcontrolService:BPOcontrolService,
    ) {}

  // id:string;
  // username:string;
  // email:string;
  // mobile:string;
  // pass:string;

  displayedColumns: string[] = ['userName','email','mobile'];

    dataSource = new MatTableDataSource(ELEMENT_DATA);

    
  ngOnInit(): void {

    this.getDeliveryManSignUp();
   
  }
  getDeliveryManSignUp(){
    this.bPOcontrolService.getDeliveryManSignedUpData().subscribe(dgSignUpData => {
      console.log("Your Signup Data is Receving",dgSignUpData.message);
      console.log("your Sign Up Data is ", this.dataSource);
      this.dataSource = dgSignUpData.productData
    })

   }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
     console.log("this is your data source ", this.dataSource.filter )
    }
   
}
