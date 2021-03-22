import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './root/app.component';
import { FooterComponent } from './modules/footer/footer.component';
import { HeaderComponent } from './modules/header/header.component';
import { SharedModule } from './shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ProfileComponent} from './modules/profile/page/profile.component';
import { AboutComponent } from './modules/about/page/about.component';
import { ProjectComponent } from './modules/project/project.component';
import { ResumeComponent } from './modules/resume/resume.component';
import { RouterModule } from '@angular/router';
import { SkillsComponent } from './modules/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProfileComponent,
    AboutComponent,
    ProjectComponent,
    ResumeComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FlexLayoutModule,
    NgbModule,
    RouterModule.forRoot([
      {path: 'resume', component: ResumeComponent},
      {path: 'profile', component: ProfileComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
