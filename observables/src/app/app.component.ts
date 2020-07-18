import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TestService],
})
export class AppComponent implements OnInit {
  show: boolean = true;
  title = 'observables';
  open = new EventEmitter<any>();
  constructor(private testService: TestService) {}
  ngOnInit() {
    this.open.subscribe(
      (data) => {
        console.log({ data });
      },
      (error) => {
        console.log('error');
      },
      () => {
        console.log('completed');
      }
    );
    this.testService.showMessage.subscribe((data) => {
      console.log(data);
    });
  }
  toggleDiv() {
    this.show = !this.show;
  }
  emitClick() {
    this.open.emit('hey');
  }
}
