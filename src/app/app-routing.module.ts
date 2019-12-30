import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { BeliefsComponent } from './beliefs/beliefs.component';
import { CitiComponent } from './citi/citi.component';
import { CutcalComponent } from './cutcal/cutcal.component';
import { DocumentsComponent } from './documents/documents.component';
import { HomeComponent } from './home/home.component';
import { MethodComponent } from './method/method.component';
import { TimePickerPageComponent } from './time-picker-page/time-picker-page.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: HomeComponent
  }, {
    path: 'citi',
    component: CitiComponent
  }, {
    path: 'cutcal',
    component: CutcalComponent
  }, {
    path: 'time-picker',
    component: TimePickerPageComponent
  }, {
    path: 'beliefs',
    component: BeliefsComponent
  }, {
    path: 'documents',
    component: DocumentsComponent
  }, {
    path: 'about-me',
    component: AboutMeComponent
  }, {
    path: 'method',
    component: MethodComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
