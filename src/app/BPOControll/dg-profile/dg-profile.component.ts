import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { BPOcontrolService } from '../bpo-control.service';

@Component({
  selector: 'app-dg-profile',
  templateUrl: './dg-profile.component.html',
  styleUrls: ['./dg-profile.component.css']
})
export class DGProfileComponent implements OnInit {

  stateValue = [];
  distValue = [];
  talukaValue = [];
  cityValue = [];

  constructor(private bPOcontrolService:BPOcontrolService) {}
  
  DeliveryManProfile : FormGroup;

  ngOnInit(): void {
    this. getState();
    this.DeliveryManProfile = new FormGroup({
      firstName : new FormControl(null,{validators: [ Validators.required,]}),
      middleName : new FormControl(null,{validators: [ Validators.required]}),
      lastName : new FormControl(null,{validators: [ Validators.required]}),
      address : new FormControl(null,{validators: [ Validators.required]}),
      state : new FormControl(null, {validators: [ Validators.required] }),
      dist : new FormControl(null,{validators: [ Validators.required]}),
      tal : new FormControl('',  Validators.required),
      city : new FormControl('',Validators.required),
      pin : new FormControl('',Validators.required),
      MobileNo : new FormControl('',Validators.required),
      AltNumber: new FormControl(null,{validators: [ Validators.required]}),
      bankAcNo : new FormControl('',Validators.required),
      bankBranch : new FormControl('',Validators.required),
      IFSC: new FormControl(null,{validators: [ Validators.required] })

    });
  }
  onSave(){
     this.bPOcontrolService.addDeliveryGuyProfileData(
     this.DeliveryManProfile.value.firstName,
     this.DeliveryManProfile.value.middleName,
     this.DeliveryManProfile.value.lastName,
     this.DeliveryManProfile.value.address,
     this.DeliveryManProfile.value.state,
     this.DeliveryManProfile.value. dist,
     this.DeliveryManProfile.value.tal,
     this.DeliveryManProfile.value.city,
     this.DeliveryManProfile.value.pin,
     this.DeliveryManProfile.value.MobileNo,
     this.DeliveryManProfile.value.AltNumber,
     this.DeliveryManProfile.value.bankBranch,
     this.DeliveryManProfile.value.bankBranch,
     this.DeliveryManProfile.value.IFSC

    ).subscribe(list =>{
      console.log("your massage from backend ", list.message)
    },Error=>{
      console.log(Error.error.message)
    });
  }


  submitForm(DeliveryManProfile,formDirective: FormGroupDirective): void {
    formDirective.resetForm();
    DeliveryManProfile.reset();
}


  getDistrict(){
    let stateName = this.DeliveryManProfile.controls['state'].value;
    console.log("the value of stateName is" , stateName );
    this.bPOcontrolService.getDistrict(stateName).subscribe(item => {
      this.distValue = item.message
    });
  }


  getState(){
    this.bPOcontrolService.getState().subscribe(data =>{
      this.stateValue =  data.message;
    
  }
)};


  getTaluka(){
    let distName = this.DeliveryManProfile.controls['dist'].value;
    console.log("The distName value is ",  distName);
    this.bPOcontrolService.getTaluka(distName).subscribe(talukas => {
      this.talukaValue = talukas.message;
    })
    
  };


  getCity(){
    let distName = this.DeliveryManProfile.controls['dist'].value;
    let talukaName = this.DeliveryManProfile.controls['tal'].value;
    let cityName = this.DeliveryManProfile.controls['city'].value;

    console.log("the distName is ", distName ,"the value of talukaName is ", talukaName)
    
    
    this.bPOcontrolService.getCity(distName,talukaName).subscribe(data => {
    this.cityValue = data.message;
    console.log("the city Name is ", cityName)
    });
  }



  printk(){
    console.log("your button ok")
  }

  dgMob(searchReslt){
    console.log("your search result is ",searchReslt.value);
  }

}
