import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '@app/core/models/user';
import { UserService } from './user.service';

import { MatTableDataSource,MatTable} from '@angular/material/table';
import {Sort} from '@angular/material/sort';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit {

  users: User[];
  userTableColumns : string[] = ['image','first_name','last_name','email'];
  dataList = [];
  /*dataSource = [{ first_name: 'Chinchu', last_name: 'Kurian', email: 'chinchu.kurian@fingent.com',phone:9876542345 },
  { first_name: 'Sreena', last_name: 'K', email: 'sreena.chandran@fingent.com',phone: 9867432123},
  { first_name: 'Kavitha', last_name: 'Pratheesh', email: 'kavitha.pratheesh@fingent.com'},
  { first_name: 'Revathy', last_name: 'Abhilash', email: 'revathy.abhilash@fingent.com'},
  { first_name: 'Jeena', last_name: 'Nikhil', email: 'jeena.nikhil@fingent.com'}
  ];*/
  
  //@ViewChild(MatTable) userTable: MatTable<any>;

  constructor(private userService: UserService) { 
    
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {this.users = data['data'];
    //this.dataList = this.users;
    });
    
  }
  sortUsers(sort: Sort) {
    const data = this.users.slice();console.log(data);
    if (!sort.active || sort.direction === '') {
      this.users = data;
      return;
    }

    this.users = data.sort((a, b) => {
      const sortDirection = sort.direction === 'asc';
      switch (sort.active) {
        case 'first_name': return compare(a.first_name, b.first_name, sortDirection);        
        case 'last_name': return compare(a.last_name, b.last_name, sortDirection);
        case 'email': return compare(a.email, b.email, sortDirection);        
        default: return 0;
      }
    });
  }

  searchUser(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    const datas = this.users.slice();console.log(this.users);
    //this.users.filter=filterValue.trim().toLowerCase();console.log(aa);  

  }

    

}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
