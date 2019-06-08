import { Injectable } from "@angular/core";
import {MainComponent} from './main/main.component';
import {
  ActivatedRouteSnapshot, RouterStateSnapshot,
  Router
} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class MainFirstGuard {
  private firstNavigation = true;
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component != MainComponent) {
        this.router.navigateByUrl("/");
        return false;
      }
    }
    return true;
  }
}
