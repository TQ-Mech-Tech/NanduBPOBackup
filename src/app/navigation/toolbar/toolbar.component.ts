
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { BPOControllerService } from 'src/app/BPOControll/auth/auth.bpo.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit,OnDestroy {

  

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(private router:Router,private bpoAuthService:BPOControllerService) { }
  
  checkAuth = false;
 //bpo
  bpoIsAuthenticated = false;
  bpoUserName:String="";
  private authListenerSubsbpoController:Subscription;

  private authListenerUsername : Subscription;
  
  
  //customer




 


  ngOnInit(){
  
  
    this.bpoIsAuthenticated = this.bpoAuthService.getIsAuthenticated();
    this.checkAuth = this.bpoAuthService.getIsAuthenticated();
    this.authListenerSubsbpoController = this.bpoAuthService.getbpoAuthStatusListener()
    .subscribe(isAuth =>{
      this.bpoIsAuthenticated = isAuth;
      this.checkAuth = isAuth;
    })

    this.authListenerUsername = this.bpoAuthService.getbpoAuthStatusUserName()
    .subscribe(userName =>{
      this.bpoUserName = userName;
    })
  }

  onLogOutbpo(){
    this.bpoAuthService.logout();
  }

  ngOnDestroy(){
    this.authListenerUsername.unsubscribe();
    this.authListenerSubsbpoController.unsubscribe();

  }

 
  
 

  
}
