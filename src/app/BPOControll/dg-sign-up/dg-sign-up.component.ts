import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { BPOcontrolService } from '../bpo-control.service';

@Component({
  selector: 'app-dg-sign-up',
  templateUrl: './dg-sign-up.component.html',
  styleUrls: ['./dg-sign-up.component.css']
})
export class DGSignUpComponent implements OnInit {

  hide = true;
  
  deliveryManSignUp:FormGroup;
  DgSignUPData:any = [];

  constructor(private bPOcontrolService:BPOcontrolService) {}


  ngOnInit() {
    this.getDeliveryManSignUp();
     this.deliveryManSignUp = new FormGroup({
      username: new FormControl(null ,{validators:[ Validators.required ] }),
      email: new FormControl(null ,{validators:[ Validators.required, Validators.email ] }),
      mobile: new FormControl(null ,{validators:[ Validators.required ] }),
      password: new FormControl(null ,{validators:[ Validators.required] })
     });

  }

      onSave(){
         this.bPOcontrolService.addDeliveryManSignUpData(
         this.deliveryManSignUp.value.username,
         this.deliveryManSignUp.value.email,
         this.deliveryManSignUp.value.mobile,
         this.deliveryManSignUp.value.password )
         .subscribe(data => {
           console.log("Message from backend ", data.message);
         });
         
      }

    submitForm(deliveryManSignUp,formDirective: FormGroupDirective): void {
        formDirective.resetForm();
        deliveryManSignUp.reset();
    }

    getDeliveryManSignUp(){
      this.bPOcontrolService.getDeliveryManSignedUpData().subscribe(dgSignUpData => {
        console.log("Your Signup Data is Receving",dgSignUpData.message);
        console.log("your Sign Up Data is ", dgSignUpData.productData);
      },Error =>{
        console.log(Error.error.message);
      }
      )
 
}
}