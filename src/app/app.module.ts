import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDividerModule } from '@angular/material/divider'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatMenuModule } from '@angular/material/menu'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatSliderModule } from '@angular/material/slider'
import { MatTabsModule } from '@angular/material/tabs'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AboutMeComponent } from './about-me/about-me.component'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BeliefsComponent } from './beliefs/beliefs.component'
import { ChipotleComponent } from './chipotle/chipotle.component'
import { CitiComponent } from './citi/citi.component'
import { CutcalComponent } from './cutcal/cutcal.component'
import { DietStatsComponent } from './diet-stats/diet-stats.component'
import { DocumentsComponent } from './documents/documents.component'
import { EducationComponent } from './education/education.component'
import { FcabComponent } from './fcab/fcab.component'
import { FoodReviewComponent } from './food-review/food-review.component'
import { HomeComponent } from './home/home.component'
import { MethodComponent } from './method/method.component'
import { MilitaryComponent } from './military/military.component'
import { ProjectOverviewComponent } from './project-overview/project-overview.component'
import { ResumeLayoutComponent } from './resume-layout/resume-layout.component'
import { HeroComponent } from './reusables/hero/hero.component'
import { ImageRowComponent } from './reusables/image-row/image-row.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { SlideshowModule } from './slideshow/slideshow.module'
import { TimePickerPageComponent } from './time-picker-page/time-picker-page.component'
import { TimePickerModule } from './time-picker-page/time-picker/time-picker.module'
import { WorkExperienceComponent } from './work-experience/work-experience.component'
@NgModule({ declarations: [
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
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatFormFieldModule,
        MatInputModule,
        TimePickerModule,
        MatDividerModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatTabsModule,
        MatTooltipModule,
        SlideshowModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
