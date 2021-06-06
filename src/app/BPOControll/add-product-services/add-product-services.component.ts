import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { BPOcontrolService } from '../bpo-control.service';
import { DataSharingService } from '../SharedId.service';

// import {SmallDeviceNotSupportedComponent} from '../small-device-not-supported/small-device-not-supported.component';
const reg = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;

const  regexfordeciamal = '^[0-9]+(\.[0-9]{1,2})?$';
@Component({
  selector: 'app-add-product-services',
  templateUrl: './add-product-services.component.html',
  styleUrls: ['./add-product-services.component.css']
})
export class AddProductServicesComponent implements OnInit , OnDestroy {

  addProductServiceForm:FormGroup;
  imageURL:string;
  productID:string;

  calculatedProductPriceAndDeliveryCharge:number;
  calcualtSurchage:number;
  totalGst:number;
  calculatedGrossAndSurcharge:number;
  claculatedGst:number;
  netAmount:number;

 
    // variable declared here
   public _id: string;
  //  messages: string;
    subscription: Subscription;
    messageId;

      editMode:boolean = false ;

  constructor(
    private bpoService:BPOcontrolService,
    private route:ActivatedRoute,
    private dataSharedId:DataSharingService 
    ) { }

  ngOnInit(): void {
    // this.dataSharedId.SharingData
  // console.log('your service id is ', this._id)
  //  this.Id = this.activatedRoute.snapshot.params['_id'];
  //   console.log('your activate route is', this.Id);
   
    this.route.paramMap.subscribe((params: ParamMap) =>
  {
    this._id = params.get('_id')
    console.log('your activate route is', typeof this._id );
  });
   
    this.productID= "";
// this.errorComponent;
    this.addProductServiceForm = new FormGroup({
    // Id :new FormControl('',{validators:[Validators.required]}),
    productName : new FormControl(null,{validators:[Validators.required, Validators.minLength(4)]}),
    grindingType : new FormControl(null,{validators:[Validators.required,Validators.minLength(4)]}),
    weightOfProduct : new FormControl(null,{validators:[Validators.required,Validators.minLength(2)]}),
    priceOfProduct : new FormControl(null,{validators:[Validators.required,Validators.pattern(/^[1-9]\d*(\.\d+)?$/),Validators.minLength(2)]}),
    serviceCharge : new FormControl(null,{validators:[Validators.required,Validators.pattern(/^[0-9]*$/)]}),
    totalAmount : new FormControl(null,{validators:[Validators.required,Validators.pattern(/^[1-9]\d*(\.\d+)?$/),Validators.minLength(2)]}),
    gitImageUrl : new FormControl(null,{validators:[Validators.required,Validators.pattern(reg)]}),
    productStatus : new FormControl(null,{validators:[Validators.required]}),
    detailsOfProduct : new FormControl(null,{validators:[Validators.required,Validators.minLength(4)]}),
    surCharge:  new FormControl(null,{validators:[Validators.required,Validators.pattern(regexfordeciamal),Validators.minLength(1)]}),
    sgst: new FormControl(null,{validators:[Validators.required,Validators.pattern(regexfordeciamal),Validators.minLength(1)]}),
    cgst: new FormControl(null,{validators:[Validators.required,Validators.pattern(regexfordeciamal),Validators.minLength(1)]}),
  });
  // this.addProductServiceForm.controls['Id'].setValue(this._id) ;

  // this.subscription = this.dataSharedId.onMessage().subscribe(message => {
  //   if (message) {
      
  //       this._id = message;
  //       console.log('your set value is', this._id);
     
       
  //   } else {
  //       // clear messages when empty message received
  //       this._id ;
  //   }
   
  
   
// });
    

console.log('nandu boss', this._id);
  }

    EditDataForAddProduct;

  onCallIdData(){
    this.bpoService.getBPOviewProductEditId(this._id).subscribe(data =>{
      console.log('this is your data',data.message)
      console.log('this is your mode value', data.message.editMode)
      console.log("your first item name is", data.message.grindingType);
      
      this.EditDataForAddProduct = {
        productName : data.message.productName,
        grindingType : data.message.grindingType,
        weightOfProduct : data.message.weight,
        priceOfProduct : data.message.price,
        serviceCharge : data.message.serviceCharge,
        totalAmount : data.message.totalAmount,
        gitImageUrl : data.message.imageUrl, 
        productStatus : data.message.productStatus,
        detailsOfProduct : data.message.detail,
        surCharge : data.message.surCharge,
        sgst : data.message.sGST,
        cgst : data.message.cGST,
      }
  
      this.addProductServiceForm.setValue({
        productName: this.EditDataForAddProduct.productName,
        grindingType:this.EditDataForAddProduct.grindingType,
        weightOfProduct:this.EditDataForAddProduct.weightOfProduct,
        priceOfProduct:this.EditDataForAddProduct.priceOfProduct,
        serviceCharge:this.EditDataForAddProduct.serviceCharge,
        totalAmount: this.EditDataForAddProduct.totalAmount,
        gitImageUrl: this.EditDataForAddProduct.gitImageUrl,
        productStatus: this.EditDataForAddProduct.productStatus,
        detailsOfProduct: this.EditDataForAddProduct.detailsOfProduct,
        surCharge: this.EditDataForAddProduct.surCharge,
        sgst: this.EditDataForAddProduct.sgst,
        cgst: this.EditDataForAddProduct.cgst
      });



    });
  }
  getTotalAmountValue(){

    this.calculatedProductPriceAndDeliveryCharge =  +this.addProductServiceForm.value.priceOfProduct + +this.addProductServiceForm.value.serviceCharge;
    this.calcualtSurchage = this.calculatedProductPriceAndDeliveryCharge * +this.addProductServiceForm.value.surCharge / 100;
   // calcualtSurchage = calcualtSurchage.toFixed(2);
    this.totalGst =  +this.addProductServiceForm.value.sgst + +this.addProductServiceForm.value.cgst;
    this.calculatedGrossAndSurcharge = this.calculatedProductPriceAndDeliveryCharge +parseFloat( this.calcualtSurchage.toFixed(2));
    this.claculatedGst = this.calculatedGrossAndSurcharge * this.totalGst/100;
    this.netAmount = this.calculatedGrossAndSurcharge +parseFloat(this.claculatedGst.toFixed(2)) ;

    //  this.form.controls['dept'].setValue(selected.id);
    this.addProductServiceForm.controls['totalAmount'].setValue(this.netAmount.toFixed(2));

 }



// getTotalAmount(){
//          this.gst = this.sgst + this.cgst ;

//          this.price = this.price * 5 / 100;

//          this.totalPrice = this.price + this.serviceCharge + this.surcharge ;
//          console.log("your total price is " + this.totalPrice)
// }

  oncheckclick(){
    this.imageURL = this.addProductServiceForm.value.gitImagePath;
    }

  onSave(){
    if(this.addProductServiceForm.invalid){
      console.log("your form is not valid boss");
      return ;
    }

    this.bpoService.addProductInfo(this.productID,this.addProductServiceForm.value.productName,
      this.addProductServiceForm.value.grindingType, this.addProductServiceForm.value.weightOfProduct,
      this.addProductServiceForm.value.priceOfProduct, this.addProductServiceForm.value.serviceCharge,
      this.addProductServiceForm.value.totalAmount, this.addProductServiceForm.value.gitImagePath,
      this.addProductServiceForm.value.productStatus, this.addProductServiceForm.value.detailsOfProduct,
      this.addProductServiceForm.value.cgst, this.addProductServiceForm.value.surCharge,
      this.addProductServiceForm.value.sgst)

      this.bpoService.editBpoAddedProduct(this.addProductServiceForm.value.productName,
        this.addProductServiceForm.value.grindingType, this.addProductServiceForm.value.weightOfProduct,
        this.addProductServiceForm.value.priceOfProduct, this.addProductServiceForm.value.serviceCharge,
        this.addProductServiceForm.value.totalAmount, this.addProductServiceForm.value.gitImagePath,
        this.addProductServiceForm.value.productStatus, this.addProductServiceForm.value.detailsOfProduct,
        this.addProductServiceForm.value.cgst, this.addProductServiceForm.value.surCharge,
        this.addProductServiceForm.value.sgst)

  }

 

  ngOnDestroy (){
    
  }

}



//this.customerProfileForm.value.firstName,
    // this.customerProfileForm.value.middleName,
    /**productName :
    grindingType :
    weightOfProduct :
    priceOfProduct :
    serviceCharge :
    totalAmount :
    gitImagePath :
    productStatus :
    detailsOfProduct  */
