import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConexionService {
  public flag : number = 0;
  constructor(private db: AngularFirestore) { }
  getObjective(email: string, date: string, cb) {
    this.db.collection('users').doc(email).collection('objetives').ref
      .where('date', '==', date)
      .get().then(function (objetive) {
        if (objetive.docs[0] !== undefined) {
          objetive.docs[0].ref.get().then(function (querySnapshot) {
            cb(querySnapshot.data());
          });
        }
        else
          cb(null);
      }).catch(function (err) {
        console.error(err);
      });
  }

}
