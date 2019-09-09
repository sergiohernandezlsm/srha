import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionsComponent } from './sections/sections.component';
import { ProfileComponent } from './sections/profile/profile.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { WorkHistoryComponent } from './sections/work-history/work-history.component';
import { TrainingComponent } from './sections/training/training.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionsComponent,
    ProfileComponent,
    PortfolioComponent,
    SkillsComponent,
    WorkHistoryComponent,
    TrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProfileComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'skills', component: SkillsComponent },
      { path: 'training', component: TrainingComponent },
      { path: 'work-history', component: WorkHistoryComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
