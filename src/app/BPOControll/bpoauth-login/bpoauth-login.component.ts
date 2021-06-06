import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BPOControllerService } from '../auth/auth.bpo.service';

@Component({
  selector: 'app-bpoauth-login',
  templateUrl: './bpoauth-login.component.html',
  styleUrls: ['./bpoauth-login.component.css']
})

export class BPOauthLoginComponent implements OnInit {

  bpoAuthLogin:FormGroup;
 

  constructor(private bpoAuthService:BPOControllerService, private router:Router) { }
  ngOnInit(): void {
    
    if(this.bpoAuthService.getIsAuthenticated()){
      this.router.navigate(['/view-product-services']);
    }
    // this.errorComponent;
  
    this.bpoAuthLogin = new FormGroup({
      email : new FormControl(null,{validators:[Validators.required,Validators.email]}),
      Password:new FormControl(null,{validators:[Validators.required]}),
    });
      }

      onLogin(){
        if(this.bpoAuthLogin.invalid){
          return
        }

        this.bpoAuthService.bpoLogin(this.bpoAuthLogin.value.email,this.bpoAuthLogin.value.Password);
       
      }

   

      

      }
