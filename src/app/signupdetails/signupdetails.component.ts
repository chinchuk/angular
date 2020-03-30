import { Component, OnInit } from '@angular/core';
import { SignupService } from '@app/signup/signup.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signupdetails',
  templateUrl: './signupdetails.component.html',
  styleUrls: ['./signupdetails.component.scss']
})
export class SignupdetailsComponent implements OnInit {

  //user : Observable<any>[] = [];
  user;
  constructor(private signupservice: SignupService) { 
    
  }

  ngOnInit(): void {
    this.signupservice.userDetails.subscribe(data => {this.user = data['value']});console.log(this.user,name);
  }

  getUser() {
    return this.signupservice.getUser();
  }


}
