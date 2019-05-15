import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot, RouterStateSnapshot,
  Router
} from "@angular/router";
import { LoginComponent } from './login/login.component';
@Injectable()
export class LoginFirstGuard {
  private firstNavigation = true;
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component != LoginComponent) {
        this.router.navigateByUrl("/");
        return false;
      }
    }
    return true;
  }
}
