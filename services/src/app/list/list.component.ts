import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { UserService } from './../services/user.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor( private userService:UserService) {}
  @Input() user: { name: string };
  @Input() position: number;
  // @Output() userRemoved = new EventEmitter<{ position: number }>();

  remove() {
    // this.userRemoved.emit({ position: this.position });
    this.userService.onUserRemoved({position:this.position})
  }
  ngOnInit(): void {}
}
