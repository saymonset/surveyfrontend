import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { TreeService } from './tree.service';
import { FileUploadService } from './file-upload.service';
@NgModule({
  imports: [HttpClientModule],
  providers: [UserService, AuthService, TreeService, FileUploadService]
})
export class ServicesModule { }
