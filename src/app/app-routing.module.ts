import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutMeComponent } from './about-me/about-me.component'
import { AlgoliaComponent } from './algolia/algolia'
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
import { TimePickerPageComponent } from './time-picker-page/time-picker-page.component'
import { WorkExperienceComponent } from './work-experience/work-experience.component'

const routes: Routes = [
  {
    path: '',
    component: ResumeLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'citi',
        component: CitiComponent
      },
      {
        path: 'cutcal',
        component: CutcalComponent
      },
      {
        path: 'time-picker',
        component: TimePickerPageComponent
      },
      {
        path: 'military',
        component: MilitaryComponent
      },
      {
        path: 'beliefs',
        component: BeliefsComponent
      },
      {
        path: 'documents',
        component: DocumentsComponent
      },
      {
        path: 'about-me',
        component: AboutMeComponent
      },
      {
        path: 'method',
        component: MethodComponent
      },
      {
        path: 'method',
        component: MethodComponent
      },
      {
        path: 'fcab',
        component: FcabComponent
      },
      {
        path: 'education',
        component: EducationComponent
      },
      {
        path: 'work',
        component: WorkExperienceComponent
      },
      {
        path: 'food-review',
        component: FoodReviewComponent
      },
      {
        path: 'algolia',
        component: AlgoliaComponent
      },
      {
        path: 'diet-stats',
        component: DietStatsComponent
      },
      {
        path: 'overview',
        component: ProjectOverviewComponent
      },
      {
        path: 'chipotle',
        component: ChipotleComponent
      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
