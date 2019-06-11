import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
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
import { IgxCalendarModule, IgxDatePickerModule, IgxExpansionPanelModule   } from 'igniteui-angular';
import { CalendarComponent } from '../calendar/calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SearchComponent } from '../search/search.component';
import { UploadsComponent } from '../uploads/uploads.component';
import { SendSurveyComponent } from '../send-survey/send-survey.component';
import { NpsMainChartComponent } from '../widget-nps-main/nps-main-chart.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { SHARED_FILTER_STATE, ShareFilterState } from '../observables-observer-state/share-filter-state.model';
import { SHARED_FILTER_DATE_END, ShareFilterDateEnd } from '../observables-observer-state/ShareFilterDateEnd';
import { SHARED_FILTER_SERVICIO_NODE, ShareFilterServicioNode } from '../observables-observer-state/ShareFilterServicioNode';
import { SHARED_FILTER_TERRITORIAL_NODE, ShareFilterTerritorialNode } from '../observables-observer-state/ShareFilterTerritorialNode';
import { SHARED_FILTER_EXECUTE, ShareFilterExecute } from '../observables-observer-state/ShareFilterExecute';
import { MAIN_OBSERVER, MainObserver } from '../observables-observer-state/MainObserver';
import { interceptorProvider } from '../interceptors/producto-interceptor.service';
import { HomeComponent } from '../home/home.component';
import { WidgetRepository } from '../repository/widget.repository';
import { DateFromComponent } from '../date-from/date-from.component';
import { DateToComponent } from '../date-to/date-to.component';
import { HomeSimpleComponent } from '../home-simple/home-simple.component';
import { Subject } from 'rxjs';
import { LoaderComponent } from '../loader/loader.component';
import { LoaderService } from '../loader.service';
import { LoaderInterceptor } from '../loader.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule, MatRadioModule, MatSliderModule} from '@angular/material';
import { HeadImageComponent } from '../head-image/head-image.component';
import {COMPLETE_OBSERVER, CompleteObserver} from '../observables-observer-state/completeObserver';
import { CreateCompanyComponent } from '../create-company/create-company.component';
import { MainComponent } from '../main/main.component';
import { WidgetSgComponent } from '../widget-sg/widget-sg.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule, MatRadioModule, MatSliderModule,
    HttpClientModule,   ReactiveFormsModule , BrowserModule, FormsModule, RouterModule, ServicesModule, MessageModule, HighchartsChartModule,
    TreeModule, IgxCalendarModule, IgxDatePickerModule, IgxExpansionPanelModule,
    BsDatepickerModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [LoaderService, interceptorProvider, UserDTO, TokenDTO, TreeModelTerritorialDTO, WidgetRepository,
     { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    [{ provide: SHARED_FILTER_STATE, useValue: new Subject<ShareFilterState>() }],
    [{ provide: SHARED_FILTER_DATE_END, useValue: new Subject<ShareFilterDateEnd>() }],
    [{ provide: SHARED_FILTER_SERVICIO_NODE, useValue: new Subject<ShareFilterServicioNode>() }],
    [{ provide: SHARED_FILTER_TERRITORIAL_NODE, useValue: new Subject<ShareFilterTerritorialNode>() }],
    [{ provide: SHARED_FILTER_EXECUTE, useValue: new Subject<ShareFilterExecute>() }],
    [{ provide: MAIN_OBSERVER, useValue: new Subject<MainObserver>() }],
    [{ provide: COMPLETE_OBSERVER, useValue: new Subject<CompleteObserver>() }]],
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
    SendSurveyComponent,
    NpsMainChartComponent,
    HomeComponent,
    DateFromComponent,
    DateToComponent,
    HomeSimpleComponent,
    LoaderComponent,
    HeadImageComponent,
    CreateCompanyComponent,
    MainComponent,
    WidgetSgComponent

  ],
  exports: [LoginComponent, HeadComponent, UploadsComponent, SendSurveyComponent]
})
export class LoginModule {}
