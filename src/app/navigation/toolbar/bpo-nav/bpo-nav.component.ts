import { Component, EventEmitter, OnDestroy, OnInit, Output  } from '@angular/core';
import { Subscription } from 'rxjs';
import { BPOControllerService } from 'src/app/BPOControll/auth/auth.bpo.service';


@Component({
  selector: 'app-bpo-nav',
  templateUrl: './bpo-nav.component.html',
  styleUrls: ['./bpo-nav.component.css']
})
export class BPONavComponent implements OnInit ,OnDestroy{
  

  isbpoAuthenticated = false;

  private bpoAuthListenerSub:Subscription;

  constructor(private bpoAuthService:BPOControllerService) { }
  

  ngOnInit() {
    this.isbpoAuthenticated = this.bpoAuthService.getIsAuthenticated();
    this.bpoAuthListenerSub = this.bpoAuthService.getbpoAuthStatusListener()
    .subscribe(authResult =>{
      console.log(" ************************* ",authResult);
      this.isbpoAuthenticated = authResult;
    })
  }

  

  
   
  ngOnDestroy(){
    this.bpoAuthListenerSub.unsubscribe();
  }
}

