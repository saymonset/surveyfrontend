import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
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
import { MessageModule } from '../messages/message.module';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, ServicesModule, MessageModule, HighchartsChartModule
   ],
  providers: [UserDTO, TokenDTO],
  declarations: [LoginComponent,
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
    SignUpComponent
    ],
  exports: [LoginComponent, HeadComponent]
})
export class LoginModule {}
