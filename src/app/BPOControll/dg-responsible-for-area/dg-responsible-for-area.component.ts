
import {Component,OnInit} from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { BPOcontrolService } from '../bpo-control.service';
import { ListOfAssignInfo } from '../dgResponsibleForArea.model';

export interface Profile{
  firstName:string;
  middleName:string;
  LastName:string;
  mobile:string;
}

@Component({
  selector: 'app-dg-responsible-for-area',
  templateUrl: './dg-responsible-for-area.component.html',
  styleUrls: ['./dg-responsible-for-area.component.css']
})

export class DGResponsibleForAreaComponent implements OnInit {

  AssignAreaToDgForm:FormGroup;
  stateValue = [];
  distValue = [];
  talukaValue = [];
  cityValue = [];
constructor(private bPOcontrolService:BPOcontrolService){  
}
  ngOnInit(): void {
    this.getState();
  this.AssignAreaToDgForm = new FormGroup({
    firstName: new FormControl(null , { validators:[ Validators.required]}),
    middleName:new FormControl(null , {validators:[Validators.required]}),
    lastName: new FormControl(null, { validators:[Validators.required]}),
    MobileNo:new FormControl(null, {validators:[Validators.required]}),
    state : new FormControl(null, {validators: [ Validators.required] }),
    dist : new FormControl(null,{validators: [ Validators.required]}),
    tal : new FormControl(null,  Validators.required),
    city : new FormControl(null,Validators.required),
    pin : new FormControl(null,Validators.required),
    SectorNo:new FormControl(null, Validators.required),
  });
  }
  disableReadOnlyValue = true;


  customerInfo:ListOfAssignInfo[]=[]

  onSave(){
      this.bPOcontrolService.AssignTheResponsibleAreaToDg(
        this.AssignAreaToDgForm.value.firstName,
        this.AssignAreaToDgForm.value.middleName,
        this.AssignAreaToDgForm.value.lastName,
        this.AssignAreaToDgForm.value.MobileNo,
        this.AssignAreaToDgForm.value.state,
        this.AssignAreaToDgForm.value.dist,
        this.AssignAreaToDgForm.value.tal,
        this.AssignAreaToDgForm.value.city,
        this.AssignAreaToDgForm.value.SectorNo,
        this.AssignAreaToDgForm.value.pin
      ).subscribe(
        ListOfAssignedWorks => {
          console.log("your Message ", ListOfAssignedWorks.message);
          this.customerInfo = ListOfAssignedWorks.message;
        }, 
        Error =>{
          console.log(Error.error.message);
        }
      );
    }
    submitForm(DeliveryManProfile,formDirective: FormGroupDirective): void {
      formDirective.resetForm();
      DeliveryManProfile.reset();
  }
  
  
  getState(){
    this.bPOcontrolService.getState().subscribe(data =>{
      this.stateValue =  data.message;  
  }
)};
  
  getDistrict(){
    let stateName = this.AssignAreaToDgForm.controls['state'].value;
    console.log("the value of stateName is" , stateName );
    this.bPOcontrolService.getDistrict(stateName).subscribe(item => {
      this.distValue = item.message
    });
  }




  getTaluka(){
    let distName = this.AssignAreaToDgForm.controls['dist'].value;
    console.log("The distName value is ",  distName);
    this.bPOcontrolService.getTaluka(distName).subscribe(talukas => {
      this.talukaValue = talukas.message;
    })
    
  };


  getCity(){
    let distName = this.AssignAreaToDgForm.controls['dist'].value;
    let talukaName = this.AssignAreaToDgForm.controls['tal'].value;
    let cityName = this.AssignAreaToDgForm.controls['city'].value;

    console.log("the distName is ", distName ,"the value of talukaName is ", talukaName)
    
    
    this.bPOcontrolService.getCity(distName,talukaName).subscribe(data => {
    this.cityValue = data.message;
    console.log("the city Name is ", cityName)
    });
  }
}
