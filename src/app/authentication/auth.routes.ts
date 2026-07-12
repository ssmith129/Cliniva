import { Route } from '@angular/router';

export const AUTH_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: '/admin/dashboard/main',
    pathMatch: 'full',
  },
  {
    // The sign-in page has been removed; the app no longer requires a manual
    // login. Any link to the old sign-in route lands on the default page.
    path: 'signin',
    redirectTo: '/admin/dashboard/main',
    pathMatch: 'full',
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./signup/signup.component').then((m) => m.SignupComponent),
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./forgot-password/forgot-password.component').then(
        (m) => m.ForgotPasswordComponent
      ),
  },
  {
    path: 'locked',
    loadComponent: () =>
      import('./locked/locked.component').then((m) => m.LockedComponent),
  },
  {
    path: 'page404',
    loadComponent: () =>
      import('./page404/page404.component').then((m) => m.Page404Component),
  },
  {
    path: 'page500',
    loadComponent: () =>
      import('./page500/page500.component').then((m) => m.Page500Component),
  },
  {
    path: 'two-factor',
    loadComponent: () =>
      import('./two-factor/two-factor.component').then(
        (m) => m.TwoFactorComponent
      ),
  },
  {
    path: 'maintenance',
    loadComponent: () =>
      import('./maintenance/maintenance.component').then(
        (m) => m.MaintenanceComponent
      ),
  },
  {
    path: 'coming-soon',
    loadComponent: () =>
      import('./coming-soon/coming-soon.component').then(
        (m) => m.ComingSoonComponent
      ),
  },
];
