import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { BPOcontrolService } from '../../bpo-control.service';
import { GrindProduct } from './viewGrindProduct.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: GrindProduct[] = [];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-view-grind-product',
  templateUrl: './view-grind-product.component.html',
  styleUrls: ['./view-grind-product.component.css']
})

export class ViewGrindProductComponent implements OnInit {

  constructor(private bPOcontrolService:BPOcontrolService  ) { }

  displayedColumns: string[] = ['bpoUserID', 'productName', 'grindingType', 'weight', 'price', 'serviceCharge','totalAmount'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

    

  ngOnInit(): void {
    this.bPOcontrolService.getGrindProucts().subscribe(ginding =>{
      console.log('your grind products are' ,ginding.data);
      this.dataSource =  ginding.data;
    })
  }

}












