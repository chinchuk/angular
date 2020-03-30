import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  public userDetails = new BehaviorSubject('');
  formValues = this.userDetails.asObservable();
  constructor() { }

  setUser(formValues) {
    console.log(formValues);
    this.userDetails.next(formValues);

  }

  getUser() {
    console.log(this.userDetails);
    return this.userDetails.asObservable;
  }
}
