import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeadComponent } from './head/head.component';
import { TitleComponent } from './title/title.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { CuadrantStatsComponent } from './cuadrant-stats/cuadrant-stats.component';
import { CuadrantNewsComponent } from './cuadrant-news/cuadrant-news.component';
import { CuadrantContentComponent } from './cuadrant-content/cuadrant-content.component';
import { CuadrantShortcutsComponent } from './cuadrant-shortcuts/cuadrant-shortcuts.component';
import { CuadrantChartComponent } from './cuadrant-chart/cuadrant-chart.component';
import { CuadrantTableComponent } from './cuadrant-table/cuadrant-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    CuadrantTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
