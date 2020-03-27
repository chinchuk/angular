import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';


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
      phone:this.fb.array([
        this.fb.control('')
      ])
    });
  }

  get phone() {
    return this.signupForm.get('phone') as FormArray
  }
  addPhone() {
    this.phone.push(this.fb.control(''));
  }

  submitSignupForm(){
    console.log(this.signupForm.value);
  }

}
