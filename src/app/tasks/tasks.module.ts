import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { environment } from '../../environments/environment';
import { FirestoreService } from './firestore.service';
import { TasksComponent } from './tasks.component';


@NgModule({
  declarations: [TasksComponent],
  providers: [FirestoreService],
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatListModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TasksComponent
      }
    ]),
    /**
     * @section [Firebase] 🔥
     */
    AngularFireModule.initializeApp(environment.firebase),
    environment.production
      ? AngularFirestoreModule.enablePersistence()
      : AngularFirestoreModule,
    AngularFireAuthModule,
  ]
})
export class TasksModule { }
