import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ConexionService } from './servers/conexion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items: Observable<any[]>;

    constructor(private db: AngularFirestore) {
        this.items = this.db.collection('users').doc("luis.paredes@dsindigo.com").collection('objetives').valueChanges();
    }
}
