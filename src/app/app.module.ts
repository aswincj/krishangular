import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
      bootstrap: [AppComponent]
})
export class AppModule { }
