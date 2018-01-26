import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ConexionService } from './servers/conexion.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment.prod';
import { ObjetivesComponent} from './objetives/objetives.component';
import { HttpClientModule } from '@angular/common/http';

var firebaseConfig = {
  apiKey: "AIzaSyAlI9pLwe8azMaZvSplR6XyFiU7ab_Cl14",
    authDomain: "administracion-objetivos.firebaseapp.com",
    databaseURL: "https://administracion-objetivos.firebaseio.com",
    projectId: "administracion-objetivos",
    storageBucket: "administracion-objetivos.appspot.com",
    messagingSenderId: "1077968394257"
};

@NgModule({
  declarations: [
    AppComponent,
    ObjetivesComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),  // Add this
    AngularFirestoreModule,
  ],
  providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
