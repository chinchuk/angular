import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss']
})
export class ExpertiseComponent implements OnInit {

  expertiseList: string[] = [];
  expertiseForm = new FormGroup({
    expertiseName: new FormControl('')
  });


  constructor() { }

  ngOnInit(): void {
  }

  addExpertise(item) {
    this.expertiseList.push(item);
    //expertise = '';
    console.log(this.expertiseList);
  }

}
