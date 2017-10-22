import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ErrorComponent } from './error/error.component';

export const router: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'test', component: TestComponent },
    { path: 'error', component: ErrorComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);