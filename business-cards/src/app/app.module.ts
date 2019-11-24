import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { EditBusinessCardComponent } from './edit-business-card/edit-business-card.component';
import { BusinessCardListComponent } from './business-card-list/business-card-list.component';
import { AddBusinessCardComponent } from './add-business-card/add-business-card.component';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { WebcamScreenshotComponent } from './webcam-screenshot/webcam-screenshot.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    BusinessCardComponent,
    EditBusinessCardComponent,
    BusinessCardListComponent,
    AddBusinessCardComponent,
    WebcamScreenshotComponent,
    FilterPipe
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig, 'my-app-name'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
