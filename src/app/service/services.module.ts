import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { TreeService } from './tree.service';
import { FileUploadService } from './file-upload.service';
import {SendSurveyService } from './send-survey';
import { ChartService } from './chart.service';
@NgModule({
  imports: [HttpClientModule],
  providers: [UserService, AuthService, TreeService, FileUploadService, SendSurveyService, ChartService]
})
export class ServicesModule { }
