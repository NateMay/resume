import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacySlideToggleModule as MatSlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { MatLegacySliderModule as MatSliderModule } from '@angular/material/legacy-slider';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeliefsComponent } from './beliefs/beliefs.component';
import { ChipotleComponent } from './chipotle/chipotle.component';
import { CitiComponent } from './citi/citi.component';
import { CutcalComponent } from './cutcal/cutcal.component';
import { DietStatsComponent } from './diet-stats/diet-stats.component';
import { DocumentsComponent } from './documents/documents.component';
import { EducationComponent } from './education/education.component';
import { FcabComponent } from './fcab/fcab.component';
import { FoodReviewComponent } from './food-review/food-review.component';
import { HomeComponent } from './home/home.component';
import { MethodComponent } from './method/method.component';
import { MilitaryComponent } from './military/military.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ResumeLayoutComponent } from './resume-layout/resume-layout.component';
import { HeroComponent } from './reusables/hero/hero.component';
import { ImageRowComponent } from './reusables/image-row/image-row.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SlideshowModule } from './slideshow/slideshow.module';
import { TimePickerPageComponent } from './time-picker-page/time-picker-page.component';
import { TimePickerModule } from './time-picker-page/time-picker/time-picker.module';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CitiComponent,
    CutcalComponent,
    TimePickerPageComponent,
    SidebarComponent,
    DocumentsComponent,
    AboutMeComponent,
    BeliefsComponent,
    MethodComponent,
    ResumeLayoutComponent,
    MilitaryComponent,
    EducationComponent,
    WorkExperienceComponent,
    FcabComponent,
    ImageRowComponent,
    HeroComponent,
    FoodReviewComponent,
    DietStatsComponent,
    ProjectOverviewComponent,
    ChipotleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    TimePickerModule,
    MatDividerModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    MatExpansionModule,
    MatTabsModule,
    MatTooltipModule,
    SlideshowModule,
    // MatIconRegistry,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
