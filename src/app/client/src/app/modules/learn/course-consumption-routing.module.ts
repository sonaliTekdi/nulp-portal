import { CourseConsumptionPageComponent, CoursePlayerComponent } from './components';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@sunbird/core';
import { UnEnrollBatchComponent } from './components/batch/unenroll-batch/unenroll-batch.component';
import { AssessmentPlayerComponent } from './components/course-consumption/assessment-player/assessment-player.component';
import { PendingchangesGuard } from '@sunbird/public';
import { CourseProgressExhaustComponent } from '../dashboard';

const telemetryEnv = 'Course';
const objectType = 'Course';
const routes: Routes = [
  {
    path: 'play/:collectionId', component: AssessmentPlayerComponent, canDeactivate: [PendingchangesGuard],
    data: {
      telemetry: {
        env: telemetryEnv, pageid: 'course-player', type: 'view', object: { ver: '1.0', type: 'batch' }
      }
    }
  }, {
    path: '', component: CourseConsumptionPageComponent,
    data: { telemetry: { env: telemetryEnv } },
    children: [
      {
        path: ':courseId', component: CoursePlayerComponent,
        data: {
          telemetry: {
            env: telemetryEnv, pageid: 'course-details', type: 'view', object: { ver: '1.0', type: 'batch' }
          },
          breadcrumbs: [{ label: 'Home', url: '/home' }, { label: 'Courses', url: '/learn' }]
        },
        children: [{
          path: '', loadChildren: () => import('./batch.module').then(m => m.BatchModule)
        },
      ]
      },
      {
        path: ':courseId/courseProgressExhaust', component: CourseProgressExhaustComponent,
      },   

      {
        path: ':courseId/dashboard', loadChildren: () => import('./../dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard],
        data: {
          roles: 'createBatchRole',
          telemetry: { env: telemetryEnv, pageid: 'course-stats', type: 'view', object: { ver: '1.0', type: 'course' } }
        }
      },
      {
        path: ':courseId/batch/:batchId', component: CoursePlayerComponent,
        data: {
          // routeReuse: {
          //   reuse: true,
          //   path: 'learn/course/play'
          // },
          telemetry: { env: telemetryEnv, pageid: 'course-read', type: 'workflow', object: { ver: '1.0', type: 'course' } },
          breadcrumbs: [{ label: 'Home', url: '/home' }, { label: 'Courses', url: '/learn' }]
        },
        children: [
          {
            path: 'unenroll/batch/:batchId', component: UnEnrollBatchComponent,
            data: {
              telemetry: { env: telemetryEnv, pageid: 'batch-enroll', type: 'view', object: { ver: '1.0', type: 'batch' } }
            }
          }
        ]
      },
      {
        path: ':courseId/:courseStatus', component: CoursePlayerComponent,
        data: {
          telemetry: {
            env: telemetryEnv, pageid: 'course-player-unlisted', type: 'view', object: { ver: '1.0', type: 'batch' }
          },
          breadcrumbs: [{ label: 'Home', url: '/home' }, { label: 'Courses', url: '/learn' }]
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseConsumptionRoutingModule { }
