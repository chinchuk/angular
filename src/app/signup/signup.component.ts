import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.initSignupForm();
  }

  ngOnInit(): void {
  }

  initSignupForm() {
    this.signupForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.required],
      address: [''],
      phone:[''],
    });
  }

  submitSignupForm(){
console.log(this.signupForm.value);
  }

}
