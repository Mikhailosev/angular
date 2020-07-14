import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor() {}
  @Input() user: { name: string };
  @Input() position: number;
  @Output() userRemoved = new EventEmitter<{ position: number }>();

  remove() {
    this.userRemoved.emit({ position: this.position });
  }
  ngOnInit(): void {}
}
