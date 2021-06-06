import { Component, OnInit } from '@angular/core';

import { BPOControllerService } from './BPOControll/auth/auth.bpo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'basic-project'

  constructor( private bpoAuthService:BPOControllerService){

  }
  ngOnInit(){
    this.bpoAuthService.autoAuthBpo();
  }



}

