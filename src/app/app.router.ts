import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ErrorComponent } from './error/error.component';

export const router: Routes = [
    { path: '', redirectTo: 'test', pathMatch: 'full'},
    { path: 'test', component: TestComponent,data: { title1: 'Heroes List' } },
    { path: 'error', component: ErrorComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);