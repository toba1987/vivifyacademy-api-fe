import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';
import { AuthService } from './../services/auth.service';



@Injectable()
export class GuestGuard implements CanActivate {

    constructor(private auth: AuthService,
                private router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ){
        if(!this.auth.isAuthenticated){
            return true;
        }
        this.router.navigateByUrl('')
        return false;
    }
}