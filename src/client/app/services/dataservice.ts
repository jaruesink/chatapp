import {Component, Inject, Injectable} from 'angular2/core';
import {Router} from 'angular2/router';
import {AngularFire, FirebaseRef, FirebaseAuth} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  auth_data: any = this.auth.getAuth();
  user_data: Observable<any>;
  user = {email: '...'};
  constructor(@Inject(FirebaseAuth) public auth, @Inject(FirebaseRef) public ref, public af:AngularFire) {
    if(this.auth_data) {
      this.user_data = af.object('/users/'+this.auth_data.uid);
      this.user_data.subscribe( user_data => {
        this.user = user_data;
      });
    }
  }
}
