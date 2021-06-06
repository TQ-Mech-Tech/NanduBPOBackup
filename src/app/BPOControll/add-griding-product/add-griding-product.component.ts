import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { BPOcontrolService } from '../bpo-control.service';
const reg = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
const re =  /^[a-z0-9\\-]/;
const  regexfordeciamal = '^[0-9]+(\.[0-9]{1,2})?$';
@Component({
  selector: 'app-add-griding-product',
  templateUrl: './add-griding-product.component.html',
  styleUrls: ['./add-griding-product.component.css']
})
export class AddGridingProductComponent implements OnInit {
  addGrindProductServiceForm:FormGroup;
  imageURL:string;
  productID:string;

  calculatedProductPriceAndDeliveryCharge:number;
  calcualtSurchage:number;
  totalGst:number;
  calculatedGrossAndSurcharge:number;
  claculatedGst:number;
  netAmount:number;
 
  constructor( private bopcontrolServ:BPOcontrolService) { }

  ngOnInit(): void {
    this.productID= "";

    this.addGrindProductServiceForm = new FormGroup({
    productName : new FormControl(null,{validators:[Validators.required,]}),
    grindingType : new FormControl(null,{validators:[Validators.required,Validators.minLength(4)]}),
    weightOfProduct : new FormControl(null,{validators:[Validators.required]}),
    priceOfProduct : new FormControl(null,{validators:[Validators.required]}),
    serviceCharge : new FormControl(null,{validators:[Validators.required,Validators.pattern(/^[0-9]*$/)]}),
    totalAmount : new FormControl(null,{validators:[Validators.required,Validators.pattern(/^[1-9]\d*(\.\d+)?$/),Validators.minLength(2)]}),

  });

  }
  getTotalAmountValue(){

    this.calculatedProductPriceAndDeliveryCharge =  +this.addGrindProductServiceForm.value.priceOfProduct + +this.addGrindProductServiceForm.value.serviceCharge;
    this.addGrindProductServiceForm.controls['totalAmount'].setValue(this.calculatedProductPriceAndDeliveryCharge.toFixed(2));
    // this.calcualtSurchage = this.calculatedProductPriceAndDeliveryCharge * +this.addGrindProductServiceForm.value.surCharge / 100;
   // calcualtSurchage = calcualtSurchage.toFixed(2);
    // this.totalGst =  +this.addGrindProductServiceForm.value.sgst + +this.addGrindProductServiceForm.value.cgst;
    // this.calculatedGrossAndSurcharge = this.calculatedProductPriceAndDeliveryCharge +parseFloat( this.calcualtSurchage.toFixed(2));
    // this.claculatedGst = this.calculatedGrossAndSurcharge * this.totalGst/100;
    // this.netAmount = this.calculatedGrossAndSurcharge +parseFloat(this.claculatedGst.toFixed(2)) ;

    //  this.form.controls['dept'].setValue(selected.id);
    // this.addGrindProductServiceForm.controls['totalAmount'].setValue(this.netAmount.toFixed(2));

 }

  onSaveproduct(){
    if(this.addGrindProductServiceForm.invalid){
    console.log("your form is invalid");
    return;
    }

    //addGrindingProduct(prodname:string,type:string,weight:string,price:string,serviceCharge:string,totalAmount:string){
    //this.addProductServiceForm.value.productName

    this.bopcontrolServ.addGrindingProduct(this.addGrindProductServiceForm.value.productName,this.addGrindProductServiceForm.value.grindingType,
      this.addGrindProductServiceForm.value.weightOfProduct,this.addGrindProductServiceForm.value.priceOfProduct,this.addGrindProductServiceForm.value.serviceCharge,
      this.addGrindProductServiceForm.value.totalAmount);
    console.log("your form is valid");



  }
}
