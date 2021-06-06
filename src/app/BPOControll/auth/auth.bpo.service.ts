import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Router } from "@angular/router";
import { Subject } from "rxjs";
@Injectable({ providedIn: "root" })

export class BPOControllerService{

   

    private isAuthenticated = false;

    private bpoToken:string;
    private bpoauthStatusListener = new Subject<boolean>();
    private bpoNavigationPriorityStatusListener = new Subject<boolean>();


    private tokenTimer:any;

    private bpoUsername = "";
    private bpoUserNameListener = new Subject<String>();

    constructor(private http: HttpClient, private router: Router) { }
////emaiel,passawoard

    getbpoNavigationPriorityStatusListener(){
        return this.bpoNavigationPriorityStatusListener.asObservable();
    }
    
    getbpoAuthStatusUserName(){
        return this.bpoUserNameListener.asObservable();
    }

    getbpoAuthStatusListener(){
        return this.bpoauthStatusListener.asObservable();
    }

    getbpoToken(){
        console.log("BPO token boss, ",this.bpoToken);
        return this.bpoToken;
    }

    getIsAuthenticated(){
        return this.isAuthenticated;
    }

    setAuthTimer(timerDuration:number){
        this.tokenTimer = setTimeout(()=>{
            this.logout();
        },timerDuration * 1000)
    }
    bpoLogin(emaiel:string,passawoard:string){
        this.http.post<{token:string,expiresIn:number,userName:string}>("http://localhost:3000/api/bpo/controls/auth/bpos-logins",{emaiel,passawoard})
        .subscribe(loginResult =>{
            console.log("your bpo controller login ",loginResult);
            const token = loginResult.token;
            this.bpoToken = token;
            if(this.bpoToken){
                const expieresInDuration = loginResult.expiresIn;
                this.setAuthTimer(expieresInDuration);
                this.bpoUsername = loginResult.userName;
                this.bpoUserNameListener.next(loginResult.userName);
                this.isAuthenticated = true;
                this.bpoauthStatusListener.next(true);
                this.bpoNavigationPriorityStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expieresInDuration * 1000);
                this.saveAuthData(token,expirationDate);
                this.router.navigate(['/view-product-services']);
            }
            
        })
    }

    logout(){
        this.bpoToken = null;
        this.isAuthenticated = false;
        this.bpoauthStatusListener.next(false);
        this.bpoNavigationPriorityStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/app-bpoauth-login'])
    }

    private saveAuthData(bpoToken:string,bpoexpirationDate:Date){
        localStorage.setItem('bpoToken',bpoToken);
        localStorage.setItem('bpoexpirationDate',bpoexpirationDate.toISOString());

    }

    private clearAuthData(){
        localStorage.removeItem('bpoToken');
        localStorage.removeItem('bpoexpirationDate');
    }

    autoAuthBpo(){
        const authInformation = this.getAuthData();
        if(!authInformation){
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if(expiresIn){
            this.bpoToken = authInformation.bpoToken;
            this.isAuthenticated = true;
            this.setAuthTimer(expiresIn / 1000);
            this.bpoauthStatusListener.next(true);
            this.bpoNavigationPriorityStatusListener.next(true);
            this.getBpoAuthUsername();
        }
    }

     getBpoAuthUsername(){
        this.http.get<{userName:string}>("http://localhost:3000/api/bpo/controls/auth/get-bpo-username")
        .subscribe(resultMessage =>{
            console.log('your bpo username ',resultMessage.userName);
            this.bpoUserNameListener.next(resultMessage.userName);
        })
    }

    private getAuthData(){
        const bpoToken =  localStorage.getItem('bpoToken');
        const expirationDate = localStorage.getItem('bpoexpirationDate');
        if(!bpoToken || !expirationDate){
            return;
        }
        return {
            bpoToken : bpoToken,
            expirationDate : new Date(expirationDate)
        }
    }
}