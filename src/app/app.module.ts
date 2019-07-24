import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { Directiva1Directive } from './directivas/directiva1.directive';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Directiva1Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
