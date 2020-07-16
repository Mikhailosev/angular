import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from './../services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(    private userService:UserService
    ) {
  }
  // @Output() addUser = new EventEmitter<{ name: string }>();
  ngOnInit(): void {}
  add(user: string) {
   this.userService.onAddUser({name:user})
  }

}
