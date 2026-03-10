import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'button', pathMatch: 'full' },
  {
    path: 'button',
    loadComponent: () => import('./pages/button-demo/button-demo.component').then((m) => m.ButtonDemoComponent),
  },
  {
    path: 'input',
    loadComponent: () => import('./pages/input-demo/input-demo.component').then((m) => m.InputDemoComponent),
  },
  {
    path: 'label',
    loadComponent: () => import('./pages/label-demo/label-demo.component').then((m) => m.LabelDemoComponent),
  },
  {
    path: 'checkbox',
    loadComponent: () => import('./pages/checkbox-demo/checkbox-demo.component').then((m) => m.CheckboxDemoComponent),
  },
  {
    path: 'switch',
    loadComponent: () => import('./pages/switch-demo/switch-demo.component').then((m) => m.SwitchDemoComponent),
  },
  {
    path: 'select',
    loadComponent: () => import('./pages/select-demo/select-demo.component').then((m) => m.SelectDemoComponent),
  },
  {
    path: 'card',
    loadComponent: () => import('./pages/card-demo/card-demo.component').then((m) => m.CardDemoComponent),
  },
  {
    path: 'separator',
    loadComponent: () => import('./pages/separator-demo/separator-demo.component').then((m) => m.SeparatorDemoComponent),
  },
  {
    path: 'alert',
    loadComponent: () => import('./pages/alert-demo/alert-demo.component').then((m) => m.AlertDemoComponent),
  },
  {
    path: 'badge',
    loadComponent: () => import('./pages/badge-demo/badge-demo.component').then((m) => m.BadgeDemoComponent),
  },
  {
    path: 'avatar',
    loadComponent: () => import('./pages/avatar-demo/avatar-demo.component').then((m) => m.AvatarDemoComponent),
  },
  {
    path: 'dialog',
    loadComponent: () => import('./pages/dialog-demo/dialog-demo.component').then((m) => m.DialogDemoComponent),
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs-demo/tabs-demo.component').then((m) => m.TabsDemoComponent),
  },
  {
    path: 'accordion',
    loadComponent: () => import('./pages/accordion-demo/accordion-demo.component').then((m) => m.AccordionDemoComponent),
  },
];
