import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Highcharts from 'highcharts';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FirestoreService } from './firestore.service';

export interface FbTask {
  description: string
  status: 'not started' | 'complete' | 'in progress'
  title: string
  x: number
  y: number
  _id: string
}

export interface SeriesTask extends Highcharts.XrangePointOptionsObject {
  custom: {
    name: string
    description: string
    id: string
  }
}

@Component({
  selector: 'app-tasks',
  template: `
    <div fxLayout="row" class="row">
      <div>
        <highcharts-chart
          [Highcharts]="Highcharts"
          [constructorType]="chartConstructor"
          [options]="chartOptions"
          [(update)]="updateFlag"
          [oneToOne]="oneToOneFlag"
          style="width: 600px; height: 600px; display: block;"
        ></highcharts-chart>
      </div>

      <div fxFlex>
        <br>

        <ng-container *ngFor="let fg of fgs | async" >
          <ng-container *ngTemplateOutlet="theForm; context: {fg :fg}">
          </ng-container>
        </ng-container>

      </div>
    </div>

    <ng-template let-fg="fg" #theForm>
      <form [formGroup]="fg">
        <div fxLayout="row" fxLayoutGap="20px">

          <mat-checkbox fxFlex="30px" class="task-check"></mat-checkbox>

          <mat-form-field fxFlex>
            <input matInput formControlName="title">
          </mat-form-field>

          <mat-form-field fxFlex="80px">
            <mat-label>Urgency</mat-label>
            <input matInput type="number" min="0" max="100" formControlName="x">
          </mat-form-field>

          <mat-form-field fxFlex="80px">
            <mat-label>Importance</mat-label>
            <input matInput type="number"  min="0" max="100" formControlName="y">
          </mat-form-field>
        </div>

        <div fxLayout="row" fxLayoutGap="20px">
          <mat-form-field fxFlex>
            <mat-label>Autosize textarea</mat-label>
            <textarea matInput cdkTextareaAutosize formControlName="description"></textarea>
          </mat-form-field>
          <button mat-button color="primary" (click)="save(fg)">Save</button>
        </div>

        <br>
      </form>
    </ng-template>
  `,
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts
  chartConstructor: string = 'chart'
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'scatter',
      margin: [70, 50, 60, 80],
      events: {
        click: (e: Highcharts.ChartClickEventObject) => {
          this.newTask(e)
        }
      }
    },
    title: {
      text: 'Task Efficiency'
    },
    tooltip: {
      headerFormat: 'Task <br>',
      pointFormat: `
      <b>{point.custom.name}</b>: <br>
      Urgency: <b>{point.x:.2f}</b> <br>
      Importance: <b>{point.y:.2f}</b>`
    },
    accessibility: {
      announceNewData: {
        enabled: true
      }
    },
    xAxis: {
      min: 0,
      max: 100,
      gridLineWidth: 1,
      minPadding: 0.2,
      maxPadding: 0.2,
      title: {
        text: 'Urgency'
      }
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: 'Importance'
      },
      minPadding: 0.2,
      maxPadding: 0.2,
      plotLines: [
        {
          value: 0,
          width: 1,
          color: '#808080'
        }
      ]
    },
    legend: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    plotOptions: {
      series: {
        lineWidth: 0,
        point: {
          events: {
            click: (e) => {
              console.log('2', e)
              // if (this.series.data.length > 1) {
              //   this.remove()
              // }
            }
          }
        }
      }
    },
    series: [
      {
        type: 'scatter',
        data: []
      }
    ]
  }
  updateFlag: boolean = false
  oneToOneFlag: boolean = true

  fgs: Observable<FormGroup[]>
  data: Highcharts.XrangePointOptionsObject[]

  constructor(private fss: FirestoreService, private fb: FormBuilder) {
    const fbtasks = this.fss.colWithIds$<FbTask>('tasks')
    this.fgs = fbtasks.pipe(
      map(tasks => tasks.map(task => this.fb.group({
        description: task.description || '',
        status: task.status || 'not started',
        title: [task.title || `A New Task at ${new Date().toString()}`, Validators.required],
        x: task.x || 0,
        y: task.y || 0,
        _id: task._id
      })))
    )

    fbtasks.pipe(
      tap(tasks => {
        this.chartOptions.series = [
          {
            type: 'scatter',
            data: tasks.map(task => ({
              x: task.x,
              y: task.y,
              custom: {
                name: task.title,
                description: task.description,
                _id: task._id
              }
            }))
          }
        ];
        this.updateFlag = true
      })
    ).subscribe()
  }

  ngOnInit(): void { }

  updateTask() {
    // this.firestore.collection('tasks').
  }

  newTask(e: Highcharts.ChartClickEventObject) {

    this.fss.add('tasks', {
      description: 'a description',
      status: 'not started',
      title: `A New Task at ${new Date().toString()}`,
      x: Math.round(e.xAxis[0].value),
      y: Math.round(e.yAxis[0].value)
    })
  }

  save(fg: FormGroup): void {
    if (fg.valid) {
      this.fss.update(`tasks/${fg.value._id}`, fg.value)
    }
  }
}
