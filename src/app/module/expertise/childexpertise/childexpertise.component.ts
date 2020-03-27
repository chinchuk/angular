import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childexpertise',
  templateUrl: './childexpertise.component.html',
  styleUrls: ['./childexpertise.component.scss']
})
export class ChildexpertiseComponent implements OnInit {

  @Input() data: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
