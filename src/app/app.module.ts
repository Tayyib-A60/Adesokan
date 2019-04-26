import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NotifierModule } from 'angular-notifier';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmailService } from './content/email.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right',
          distance: 25
        },
        vertical: {
          position: 'bottom',
          distance: 12,
          gap: 10
        }
      }
    }),
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
