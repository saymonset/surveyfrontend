import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { routing  } from './app.routing';
import { LoginFirstGuard } from './loginFirst.guard';

import { SurveyComponent } from './survey/survey.component';
import { SurveytestComponent } from './surveytest/surveytest.component';



@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveytestComponent



  ],
  imports: [
    BrowserModule,
    LoginModule,
    routing],
  providers: [LoginFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
