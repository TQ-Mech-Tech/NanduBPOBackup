import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import { BPOControllerService } from "./auth.bpo.service";


@Injectable()
export class BPOAuthGuard implements CanActivate{
    constructor(private bpoauthService:BPOControllerService, private router:Router){

    }
    canActivate(
        route:ActivatedRouteSnapshot,
        state:RouterStateSnapshot
    ):boolean | Observable<boolean> | Promise<boolean>{
      const isAuth = this.bpoauthService.getIsAuthenticated();
      if(!isAuth){
          this.router.navigate(['/app-bpoauth-login'])
      }
      return isAuth;
    }
}