import {HttpInterceptor,HttpRequest,HttpHandler} from "@angular/common/http";
import {Injectable } from "@angular/core";
import {BPOControllerService} from "./auth.bpo.service";

@Injectable()
export class BPOAuthInterceptor implements HttpInterceptor {
    constructor(private bpoAuthService:BPOControllerService){ }
    intercept(req:HttpRequest<any>,next:HttpHandler){
        const authToken = this.bpoAuthService.getbpoToken();
        const authRequest = req.clone({
            headers:req.headers.set('Authorization',"Bearer "+authToken)
        });
        return next.handle(authRequest);
    }
}