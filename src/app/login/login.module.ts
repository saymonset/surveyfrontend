import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from "../service/services.module"
import { LoginComponent } from './login.component';
import { RouterModule } from "@angular/router";
import { HeadComponent } from '../head/head.component';
import { TitleComponent } from '../title/title.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FooterComponent } from '../footer/footer.component';
import { CuadrantStatsComponent } from '../cuadrant-stats/cuadrant-stats.component';
import { CuadrantNewsComponent } from '../cuadrant-news/cuadrant-news.component';
import { CuadrantContentComponent } from '../cuadrant-content/cuadrant-content.component';
import { CuadrantShortcutsComponent } from '../cuadrant-shortcuts/cuadrant-shortcuts.component';
import { CuadrantChartComponent } from '../cuadrant-chart/cuadrant-chart.component';
import { CuadrantTableComponent } from '../cuadrant-table/cuadrant-table.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UserDTO } from '../dto/UserDTO';
import { TokenDTO } from '../dto/TokenDTO';
import { TreeModelTerritorialDTO } from '../dto/TreeModelTerritorialDTO';
import { MessageModule } from '../messages/message.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { DivisionTerritorialComponent } from '../division-territorial/division-territorial.component';
import { DivisionServicioComponent } from '../division-servicio/division-servicio.component';
import { TreeModule } from 'ng2-tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule, IgxDatePickerModule, IgxExpansionPanelModule   } from 'igniteui-angular';
import { CalendarComponent } from '../calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SearchComponent } from '../search/search.component';
import { UploadsComponent } from '../uploads/uploads.component';
import { SendSurveyComponent } from '../send-survey/send-survey.component';

@NgModule({
  imports: [HttpClientModule, ReactiveFormsModule , BrowserModule, FormsModule, RouterModule, ServicesModule, MessageModule, HighchartsChartModule,
    TreeModule, BrowserAnimationsModule, IgxCalendarModule, IgxDatePickerModule, IgxExpansionPanelModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [UserDTO, TokenDTO, TreeModelTerritorialDTO],
  declarations: [UploadsComponent, LoginComponent,
    DivisionServicioComponent,
    DivisionTerritorialComponent,
    HeadComponent,
    TitleComponent,
    ToolbarComponent,
    DashboardComponent,
    FooterComponent,
    CuadrantStatsComponent,
    CuadrantNewsComponent,
    CuadrantContentComponent,
    CuadrantShortcutsComponent,
    CuadrantChartComponent,
    CuadrantTableComponent,
    SignUpComponent,
    CalendarComponent,
    SearchComponent,
    SendSurveyComponent
    ],
  exports: [LoginComponent, HeadComponent, UploadsComponent, SendSurveyComponent]
})
export class LoginModule {}
