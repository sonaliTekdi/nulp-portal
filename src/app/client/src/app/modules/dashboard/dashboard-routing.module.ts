import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  OrganisationComponent, CourseConsumptionComponent, CourseProgressComponent, UsageReportsComponent,
  ReportComponent, ListAllReportsComponent, CourseDashboardComponent, ReIssueCertificateComponent,
  DashboardSidebarComponent,AllReportsComponent, ReportsComponent,OrganizationReportComponent,ContentReportComponent, CourseCategoryWiseComponent,ContentCategoryWiseComponent
} from './components/';
import { AuthGuard } from '../core/guard/auth-gard.service';
import { AddusersComponent } from './components/addusers/addusers.component';
import {
  StatusComponent
} from '@sunbird/org-management';
import { CourseProgressExhaustComponent } from './components/course-progress-exhaust/course-progress-exhaust.component';

const telemetryEnv = 'course-dashboard';
const routes: Routes = [
  {
  path: '', component: DashboardSidebarComponent, canActivate: [AuthGuard],
    data: {
      roles: 'createBatchRole',
      telemetry: { env: 'Course', pageid: 'course-dashboard', type: 'view', object: { ver: '1.0', type: 'course' } }
    },
    children: [
      {
        path: 'course-stats', component: CourseDashboardComponent, canActivate: [AuthGuard],
        data: {
          roles: 'createBatchRole',
          telemetry: {
            env: telemetryEnv, pageid: 'course-stats', uri: '/dashboard/course-stats',
            type: 'view', object: { ver: '1.0', type: 'course' }
          }
        }
      },
      {
        path: 'batches', component: CourseProgressComponent, canActivate: [AuthGuard],
        data: {
          roles: 'createBatchRole',
          telemetry: {
            env: telemetryEnv, pageid: 'batches', uri: '/dashboard/batches',
            type: 'view', object: { ver: '1.0', type: 'course' }
          }
        }
      },
      {
        path: 'courseProgressExhaust', component: CourseProgressExhaustComponent, canActivate: [AuthGuard],
        data: {
          roles: 'createBatchRole',
          telemetry: {
            env: telemetryEnv, pageid: 'courseProgressExhaust', uri: '/dashboard/courseProgressExhaust',
            type: 'view', object: { ver: '1.0', type: 'course' }
          }
        }
      },
      {
        path: 'certificates', component: ReIssueCertificateComponent, canActivate: [AuthGuard],
        data: {
          roles: 'createBatchRole',
          telemetry: {
            env: telemetryEnv, pageid: 'certificates', uri: '/dashboard/certificates',
            type: 'view', object: { ver: '1.0', type: 'course' }
          }
        }
      },
    ]
  },
  {
    path: 'addusess', component: AddusersComponent,
    children:[
      {
        path: 'bulkUpload/checkStatus', component: StatusComponent,
        data: {
          redirectUrl: '/dashBoard/addusess',
          telemetry: {
            env: telemetryEnv, type: 'view', mode: 'create',
            subtype: 'paginate', object: { type: telemetryEnv, ver: '1.0' }
          }
        },
      },
    ]
  },
  {
    path: 'myActivity', component: CourseConsumptionComponent,
    data: {
      telemetry: { env: 'course', pageid: 'course-creator-dashboard', type: 'view' },
      breadcrumbs: [{ label: 'Home', url: '/home' },
      { label: 'Course', url: '/learn' }, { label: 'Course Creator Dashboard', url: '' }]
    }
  },
  {
    path: 'activity/course/consumption/:id/:timePeriod', component: CourseConsumptionComponent,
    data: {
      telemetry: { env: 'course', pageid: 'course-creator-dashboard', type: 'view' },
      breadcrumbs: [{ label: 'Home', url: '/home' },
      { label: 'Course', url: '/learn' }, { label: 'Course Creator Dashboard', url: '' }]
    }
  },
  {
    path: 'organization', component: UsageReportsComponent, canActivate: [AuthGuard],
    data: {
      roles: 'dashboardRole',
      telemetry: { env: 'dashboard', pageid: 'org-admin-dashboard', type: 'view' },
      breadcrumbs: [{ label: 'Home', url: '/home' },
      { label: 'Profile', url: '/profile' }, { label: 'Organization Admin Dashboard', url: '' }]
    }
  },
  {
    path: 'organization/creation/:id/:timePeriod', component: OrganisationComponent,
    data: {
      telemetry: { env: 'profile', pageid: 'org-admin-dashboard', type: 'view' },
      breadcrumbs: [{ label: 'Home', url: '/home' },
      { label: 'Profile', url: '/profile' }, { label: 'Organization Admin Dashboard', url: '' }]
    }
  },
  {
    path: 'reports', component: ListAllReportsComponent, data: {
      roles: 'reportViewerRole',
      telemetry: { env: 'reports', pageid: 'reports-list', type: 'view' }
    }
  },
  {
    path: 'reports/:reportId', component: ReportComponent,
    data: {
      roles: 'reportViewerRole',
      telemetry: { env: 'reports', pageid: 'report-chart', type: 'view' },
      breadcrumbs: [{ label: 'Home', url: '/home' },
      { label: 'Profile', url: '/profile' }, { label: 'Report Page', url: '' }]
    }
  },
  {
    path: 'reports/:reportId/:hash', component: ReportComponent,
    data: {
      roles: 'reportViewerRole',
      telemetry: { env: 'reports', pageid: 'report-chart', type: 'view' },
      breadcrumbs: [{ label: 'Home', url: '/home' },
      { label: 'Profile', url: '/profile' }, { label: 'Report Page', url: '' }]
    }
  },
  {
    path: 'allDashboard', component: AllReportsComponent,
    data: {
      roles: 'allDashboard',
      telemetry: { env: 'allDashboard', pageid: 'allDashboard', type: 'view' },
      breadcrumbs: [{ label: 'Home', url: '/home' }, { label: 'All Dashboard', url: '' }]
    }
  },
  {
    path: 'userreports', component: ReportsComponent
  
  },
  {
    path: 'organization-report', component: OrganizationReportComponent
  
  },
  {
    path: 'content-report', component: ContentReportComponent
  
  },
  {
    path: 'category-report', component: ContentCategoryWiseComponent
  
  },
  {
    path: 'course-report', component: CourseCategoryWiseComponent
  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { } 

