import { Component, OnInit } from '@angular/core';
import { CustomerViewProfileService } from '../view-customer-profile.service';

@Component({
  selector: 'app-update-customer-profile',
  templateUrl: './update-customer-profile.component.html',
  styleUrls: ['./update-customer-profile.component.css']
})
export class UpdateCustomerProfileComponent implements OnInit {

  constructor(private updateCustProfileService:CustomerViewProfileService) { }
  id:string;
  ngOnInit(): void {
    this.id= this.updateCustProfileService.getCustUpdateId();
  }

}
