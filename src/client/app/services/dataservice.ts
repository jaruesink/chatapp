import {Component, Inject, Injectable} from 'angular2/core';
import {Router} from 'angular2/router';
import {AngularFire, FirebaseRef, FirebaseAuth} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  user_data: Observable<any>;
  auth_data: any;
  user: any;
  constructor(@Inject(FirebaseAuth) public auth, @Inject(FirebaseRef) public ref, public af:AngularFire) {
    this.auth.subscribe( auth_data => {
      this.auth_data = auth_data;
      if(auth_data) {
        this.user_data = af.object('/users/'+auth_data.uid);
        this.user_data.subscribe( user_data => {
          this.user = user_data;
          console.log(this.user);
        });
      }
    });
  }
}
