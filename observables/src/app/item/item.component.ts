import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Observable,
  Subscription,
  range,
  interval,
  timer,
  fromEvent,
} from 'rxjs';
import { filter, delay } from 'rxjs/operators';
import { TestService } from './../test.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  constructor(private testService: TestService) {}
  private showNumbers: Subscription;
  ngOnInit(): void {
    this.testService.showMessage.emit('working');
    // const number = range(1, 7);
    // number.subscribe((x) => {
    //   console.log(x);
    // });
    // const numbers = interval(1000);
    // numbers.subscribe((x) => {
    //   console.log(x);
    // });
    // const numbers2 = timer(3000, 1000);
    // numbers2.subscribe((x) => {
    //   console.log(x);
    // });
    const numbers = range(1, 7);
    numbers.subscribe((x) => {
      console.log(x);
    });
    const getNumber = numbers.pipe(
      delay(5000),
      filter((value) => {
        return value >= 4;
      })
    );
    getNumber.subscribe((x) => console.log(x));
    const clicks = fromEvent(document, 'click');
    clicks.subscribe((x) => console.log(x));
    // const ourObservable = Observable.create((observer) => {
    //   let i = 0;
    //   setInterval(() => {
    //     if (i !== 3) {
    //       observer.next(i);
    //     }
    //     if (i === 5) {
    //       observer.error('There was an error');
    //     }
    //     if (i === 6) {
    //       observer.complete();
    //     }
    //     i++;
    //   }, 1000);
    // });
    // this.showNumbers = ourObservable.subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => console.log('completed')
    // );
  }
  ngOnDestroy() {
    // this.showNumbers.unsubscribe();
  }
}
