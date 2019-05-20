import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeadComponent } from './head/head.component';
import { LoginFirstGuard } from './loginFirst.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SurveytestComponent } from './surveytest/surveytest.component';
const routes: Routes = [
  { path: 'survey', component: SurveytestComponent, canActivate: [LoginFirstGuard] },
  { path: 'head', component: HeadComponent, canActivate: [LoginFirstGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoginFirstGuard] },
  { path: 'sig-in', component: SignUpComponent, canActivate: [LoginFirstGuard] },
  { path: '**', redirectTo: '/login' }
]

/*const routes: Routes = [
  { path: 'head', component: HeadComponent },
  { path: '**', component: LoginComponent }
]*/
export const routing = RouterModule.forRoot(routes);


/**
 *
 * RouterModule.forRoot([
 { path: "store", component: StoreComponent,
   canActivate: [StoreFirstGuard]},
 { path: "cart", component: CartDetailComponent,
   canActivate: [StoreFirstGuard]},
 { path: "checkout", component: CheckoutComponent,
   canActivate: [StoreFirstGuard]},
 {
   path: "admin",
   loadChildren: "./admin/admin.module#AdminModule",
   canActivate: [StoreFirstGuard]
 },
 { path: "**", redirectTo: "/store" }
 ])
 *
 *
 * */
