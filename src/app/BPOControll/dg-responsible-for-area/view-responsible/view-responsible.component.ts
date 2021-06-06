import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { BPOcontrolService } from '../../bpo-control.service';

interface AccountableFor{
  _id:string;
  delierySignUpID: string;
  firstName: string;
  lastName: string;
  middleName: string;
  mobile: string;
  state:string;
  dist: string;
  tal: string;
  city: string;
  sectors:[];
  pinCode: string;
}

const ELEMENT_DATA:AccountableFor[]=[];

@Component({
  selector: 'app-view-responsible',
  templateUrl: './view-responsible.component.html',
  styleUrls: ['./view-responsible.component.css']
})
export class ViewResponsibleComponent implements OnInit {

  constructor(private bPOcontrolService:BPOcontrolService) { }


    displayedColumns: string[] = ['deliverySignUPID','firstName','middleName','lastName','mobile',
    'state','dist','tal','city','sector','pinCode','editButton'];

    dataSource = new MatTableDataSource(ELEMENT_DATA);

     applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
       this.dataSource.filter = filterValue.trim().toLowerCase();
      }

  ngOnInit(): void {
    this.bPOcontrolService.getDeliveryResponsibilityTableDAta().subscribe(
      listOfAreaWiseResponsibility =>{
        console.log("you list data is", typeof listOfAreaWiseResponsibility.dataInfo, listOfAreaWiseResponsibility.dataInfo, 'dataSource value is',this.dataSource );
        this.dataSource = listOfAreaWiseResponsibility.dataInfo;
      },
      Error =>{
        console.log(Error.error.dataInfo);
      }
    )
  }

}
