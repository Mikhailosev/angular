import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'services';
  users: { name: string }[] = [
    {
      name: 'Francis',
    },
    { name: 'Steve' },
    { name: 'John' },
  ];
  onUserRemoved(toRemove: { position: number }) {
    this.users.splice(toRemove.position, 1);
  }
}
