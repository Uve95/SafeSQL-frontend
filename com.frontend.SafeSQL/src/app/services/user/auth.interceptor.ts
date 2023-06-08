import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "./user.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private userService: UserService){}

//Modificamos la request para ponerle nuestro token en el header
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let authReq = req;
        const token = this.userService.getToken();

        if(token != null){
            authReq = authReq.clone({
            setHeaders : {Authorization:`Bearer ${token}`}
        })
    }
        return next.handle(authReq);
    }

}

export const authInterceptorProviders = [{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi:true
}]