import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

import {Products} from './products.model';
import { GrindProducts } from "./grinding-product";
import { DeliveryManSignUPData } from "./dg-sign-up/deliverySignUp.model";
import { deliveryManProfile } from "./deliveryProfile.model";
import { ListOfAssignInfo } from "./dgResponsibleForArea.model";
import { BPOAddedEditProduct } from "./editBpoAddedProduct.model";

@Injectable({ providedIn: "root" })

export class BPOcontrolService{

  constructor(private http: HttpClient, private router: Router) {    }

  addProductInfo(id:string,productname:string,grindingtype:string,weight:string,price:string,servicecharge:string,totalamount:string,
    imageurl:string,productstatus:string,detail:string,surcharge:string,sgst:string,cgst:string){
/**surcharge:string;
  sgst:string;
  cgst:string; */
      const productDataInfo : Products = {
        id:id,
        productname:productname,
        grindingtype:grindingtype,
        weight:weight,
        price:price,
        servicecharge:servicecharge,
        surcharge:surcharge,
        sgst:sgst,
        cgst:cgst,
        totalamount:totalamount,
        imageurl:imageurl,
        productstatus:productstatus,
        detail:detail,
        bpoID : null  }

        this.http.post<{message:string,data:string}>("http://localhost:3000/api/bpo-addproductservice/add-products",productDataInfo)
        .subscribe(responseData =>{
          console.log("your response from ",responseData.message)
        });
  }



/** id:string;
  productname:string;
  grindingtype:string;
  weight:string;
  price:string;
  serviceCharge:string;
  totalAmount:string;
  BPOuserID:string; */

  addGrindingProduct(prodname:string,type:string,weight:string,price:string,serviceCharge:string,totalAmount:string){

    const grindProdInfo : GrindProducts ={
      id:"none",
      productname:prodname,
      grindingtype:type,
      weight:weight,
      price:price,
      serviceCharge:serviceCharge,
      totalAmount:totalAmount,
      BPOuserID:"none"
    }
    this.http.post<{message:string,data:any}>("http://localhost:3000/api/bpo-addproductservice/add-grinding-products",grindProdInfo)
    .subscribe(result =>{
      console.log("grindig data adding result ",result.message, result.data);

    });

  }

  getBPOaddedProctView(){
    return this.http.get<{message:string,productData:any}>("http://localhost:3000/api/bpo-addproductservice/get-added-product");
  }

  addDeliveryManSignUpData(username:string, email:string, mobile:string, password:string){
   
    const DgProfileData:DeliveryManSignUPData = {
        userName:username,
        email:email,
        mobile:mobile,
        passaword:password, 
    }
   return this.http.post<{message:string}>("http://localhost:3000/api/bpo-controller/deliveryGuy/sign-up",DgProfileData);

  }

  getDeliveryManSignedUpData(){
   return this.http.get<{message:string,productData:any}>("http://localhost:3000/api/bpo-controller/deliveryGuy/getsignup-data");
  }

  getCustomersReceivedOrdersBPO(){
     return this.http.get<{dataInfo:any}>("http://localhost:3000/api/bpo-controller/customer-order/get-customers-all-orders");
  }


  ViewCustomerOrderProductDetailsComponent(co_ID:any){
    return this.http.put<{message:string, data:any}>("http://localhost:3000/api/bpo-controller/customer-order/get-customer-orders-details/" + co_ID,"");
  }

  getCustomerProfileTable(){
    return this.http.get<{message:any}>("http://localhost:3000/api/bpo-controller/customer-profile/get-all-customer-profile");
  }

   fetchRefundInfo(){
     return this.http.get<{message:any}>("http://localhost:3000/api/bpo-controller/customer-refunds/get-customer-refund-info")
   }

   addCustomerApprovedRefund(custRefID:string){
     return this.http.post<{message:any}>("http://localhost:3000/api/bpo-controller/customer-refunds/add-customer-approve-refund", {custRefID})
   }
   addCancelRufund(custRefID:string){
     return this.http.post<{message:any}>("http://localhost:3000/api/bpo-controller/customer-refunds/add-customer-cancle-refund", {custRefID} )
   }
   getApprovedRefundData(){
     return this.http.get<{message:any}>("http://localhost:3000/api/bpo-controller/customer-refunds/get-customer-approved-refund");
   }

   getCancelRefundRequestList(){
     return this.http.get<{message:any}>("http://localhost:3000/api/bpo-controller/customer-refunds/get-customer-cancled-refund")
   }
 
  //  addMillInfo(){
  //    return this.post<{message:any}>("http://localhost:3000/api/bpo-controller/customer-order-mill/add-customer-mill");
  //  }

  getMillInfo(){
    return this.http.get<{message:any}>("http://localhost:3000/api/bpo-controller/customer-order-mill/get-customer-mill")
  }
  
   addDeliveryGuyProfileData(firstname:string,middleName:string,lastName:string, address:string,state:string,
    dist:string,tal:string,city:string,pinNo:string,mobNo:string,altMobNo:string,bankAc:string,bankBranch:string, bankIfsc:string){
     const DeliveryProfile : deliveryManProfile = {
        firstName : firstname,
        middleName : middleName,
        lastName : lastName,
        address : address,
        state : state,
        dist : dist,
        tal : tal,
        city : city,
        pinNo : pinNo,
        mobNo : mobNo,
        altMobNo : altMobNo,
        bankAc : bankAc,
        bankBranch: bankBranch,
        bankIfsc: bankIfsc,
      }
       
     return this.http.post<{message:any}>('http://localhost:3000/api/bpo/bpo-controller/delivery-profile/addDeliveryGuyProfile',DeliveryProfile ) 
   }

   getState(){
    return this.http.get<{message:any}>("http://localhost:3000/api/bpo-controller/localizationmap/get-localization-state");
  }

  getDistrict(stateName:string){
    return this.http.post<{message:any}>("http://localhost:3000/api/bpo-controller/localizationmap/get-localization-dist",{stateName});
  }

  getTaluka(distName:string){
    return this.http.post<{message:any}>("http://localhost:3000/api/bpo-controller/localizationmap/get-localization-talukas",{distName});
  }

  getCity(distName:string, talukaName:string){
    return this.http.post<{message:any}>("http://localhost:3000/api/bpo-controller/localizationmap/get-localization-cities",{ distName, talukaName});
  }

   getAllDeliveryManProfileList(){
     return this.http.get<{message:any}>("http://localhost:3000/api/bpo/bpo-controller/delivery-profile/getAllDeliveryGuyProfile");
   }
   
   AssignTheResponsibleAreaToDg(firstname:string,
    middlename:string, lastname:string, mobile:string, state:string,dist:string,tal:string,city:string, sector:string, pincode:string){
    const  SetInfo: ListOfAssignInfo = {
     firstname:firstname,
     middlename:middlename,
     lastname:lastname,
     mobile:mobile,
     state:state,
     dist:dist,
     tal:tal,
     city:city,
     sector:sector,
     pincode:pincode,
    }

     return this.http.post<{message:any}>("http://localhost:3000/api/bpo-contoller/responsible-Area/add-delivery-responsibilty", SetInfo);
   }

   getDeliveryResponsibilityTableDAta(){
     return this.http.get<{dataInfo:any}>("http://localhost:3000/api/bpo-contoller/responsible-Area/get-delivery-responsibility")
   }

   getBPOviewProductEditId(prod_id){
     return this.http.get<{message:any,editMode:boolean}>("http://localhost:3000/api/bpo/bpo-controller/products/get-product-byid/"+prod_id)
   }
  
   editBpoAddedProduct(productName:string, grindingType:string, weight:string, price:string, serviceCharge:string, surCharge:string,
    sGST:string, cGST:string, totalAmount:string, imageUrl:string, productStatus:string, detail:string ){

     const id : BPOAddedEditProduct = {
            
            productName : productName,
            grindingType : grindingType,
            weight : weight,
            price : price,
            serviceCharge : serviceCharge,
            surCharge : surCharge,
            sGST : sGST,
            cGST : cGST,
            totalAmount : totalAmount,
            imageUrl : imageUrl,
            productStatus : productStatus,
            detail : detail
     }
     return this.http.put<{message:any}>("http://localhost:3000/api/bpo/bpo-controller/products/edit-this-product/", id);
   }
    

    getGrindProucts(){
      return this.http.get<{data:any}>("http://localhost:3000/api/bpo-addproductservice/get-grind-products")
    }

   OnViewComponentDeleteProductId(id){
    return this.http.delete<{message:any}>("http://localhost:3000/api/bpo/bpo-controller/products/delete-this-product/"+ id)
   }

}


// http://localhost:3000/api/bpo-contoller/responsible-Area/add-delivery-responsibilty (POST)
