import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
@NgModule({
  imports: [HttpClientModule],
  providers: [UserService, AuthService]
})
export class ServicesModule { }
