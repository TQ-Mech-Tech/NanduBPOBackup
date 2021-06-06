import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { BPOcontrolService } from '../../bpo-control.service';

export interface DGProfile{
address: string;
altMobNo: string;
backIFSC: string;
bankAc:string;
bankBranch: string;
city: string;
dist: string;
firstName: string;
lastName: string;
middleName: string;
mobNo: string;
pinNo: string;
state: string;
tal: string;
_id: string;
}

const ELEMENT_DATA:DGProfile[]=[];

@Component({
  selector: 'app-view-dg-profile',
  templateUrl: './view-dg-profile.component.html',
  styleUrls: ['./view-dg-profile.component.css']
})
export class ViewDgProfileComponent implements OnInit {

  constructor(private bpoControlService:BPOcontrolService) { }

  displayedColumns: string[] = ['firstName','lastName','mobNo',
'alterMobNo','bankAcNo','bankBranch','bankIFSC'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  this.bpoControlService.getAllDeliveryManProfileList().subscribe(
    ListOfDgProfile => {
       console.log('your Dg Profile List is', ListOfDgProfile.message);
       this.dataSource = ListOfDgProfile.message;
    },
    Error => {
      console.log(Error.error.messge);
    }
  )
  }

}
