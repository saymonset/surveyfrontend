import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeadComponent } from './head/head.component';
import { LoginFirstGuard } from './loginFirst.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SurveytestComponent } from './surveytest/surveytest.component';
import { UploadsComponent } from './uploads/uploads.component';
import { SendSurveyComponent } from './send-survey/send-survey.component';
import { GuardService as guard} from './guards/guard.service';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'sendSurvey', component: SendSurveyComponent, canActivate: [LoginFirstGuard] },
  { path: 'survey', component: SurveytestComponent },
  { path: 'head', component: HeadComponent, canActivate: [LoginFirstGuard] },
  { path: 'login', component: LoginComponent, canActivate: [LoginFirstGuard] },
  { path: 'registro', component: SignUpComponent, canActivate: [LoginFirstGuard] },
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
]

/*const routes: Routes = [
  { path: 'head', component: HeadComponent },
  { path: '**', component: LoginComponent }
]*/
export const routing = RouterModule.forRoot(routes);

// productos: utilizamos canActivate
/*{path: 'detalle/:id', component: DetalleProductoComponent,
  canActivate: [guard], data: { expectedRol: ['admin', 'user']}},
{path: 'nuevo', component: NuevoProductoComponent,
  canActivate: [guard], data: { expectedRol: ['admin']}},
{path: 'editar/:id', component: EditarProductoComponent,
  canActivate: [guard], data: { expectedRol: ['admin']}},*/
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
