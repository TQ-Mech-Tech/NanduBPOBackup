import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BPOcontrolService } from '../bpo-control.service';

 export interface MillInfo{
   _id:string;
  orderId:string;
  custID:string;
  pickUpDate:string;
  droppingDate:string;
  customerName:string;
  custMobile:string;
  millName:string;
  MWName:string;
  millcontact:string;
  sector_near_area:string;
  city:string;
}

const ELEMENT_DATA:MillInfo[]=[];

@Component({
  selector: 'app-mill-info',
  templateUrl: './mill-info.component.html',
  styleUrls: ['./mill-info.component.css']
})
export class MillInfoComponent implements OnInit {


  constructor(private bPOcontrolService:BPOcontrolService) { }
  
  displayedColumns: string[] = ['orderId','custID','pickUpDate','droppingDate',	'customerName', 'custMobile','millName',	'MWName','millcontact','sector_near_area','city'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
    }



  ngOnInit(): void {
    this.bPOcontrolService.getMillInfo().subscribe(millInfo =>{
      console.log('your Mill Info List is', millInfo.message);
      this.dataSource = millInfo.message;
    }, Error => {
      console.log(Error.error.message);
    } )
  }

}
