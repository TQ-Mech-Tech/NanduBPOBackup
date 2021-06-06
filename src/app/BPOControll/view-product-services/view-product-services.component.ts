import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BPOcontrolService } from '../bpo-control.service';
import { DataSharingService } from '../SharedId.service';
import { BPOProducts } from '../ViewProduct.model';

@Component({
  selector: 'app-view-product-services',
  templateUrl: './view-product-services.component.html',
  styleUrls: ['./view-product-services.component.css']
})
export class ViewProductServicesComponent implements OnInit {
  product_value = 115;
  productKG = 5; 
  co_ID:any;
   viewBpoAddedProduct:BPOProducts[] = [];

  constructor(
    private bPOcontrolService:BPOcontrolService,
    private router:Router,
    private dataSharedId:DataSharingService 
    
    ) { }
  

 
  ngOnInit() {

   this.bPOcontrolService.getBPOaddedProctView().subscribe(bpoviewdata => {
       console.log('Massage From Bpo is  ',bpoviewdata.message );
       console.log("your Bpo product is", bpoviewdata.productData);
       this.viewBpoAddedProduct = bpoviewdata.productData
   });
   
  }

  getEditId(_id){
    console.log("your edit id is ", _id);
    this.router.navigate(['/add-product-services',_id]);
      // this.dataSharedId.sendMessage(_id);
  }

  clearMessages(): void {
    // clear messages
    this.dataSharedId.clearMessages();
}

  getDeleteId(_id){
   console.log("you deleted products Id is ", _id);
   this.bPOcontrolService.OnViewComponentDeleteProductId(_id).subscribe(res =>{
     console.log(res.message)
   },Error =>{
    console.log(Error.error.message)
   })

  }


  openDialog(){

  }



}
