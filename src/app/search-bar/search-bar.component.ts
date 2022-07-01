import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Output()
  inputChange = new EventEmitter<string>();

  waitTime: number = 300;
  valueObservable: Subject<string> = new Subject();
  //This pipe only return a new observable when:
  //1. It takes longer than 3s to put new value into stream
  // and
  //2. The new value is diffrent from the previous one
  observablePipe: Observable<string> = this.valueObservable.pipe(
    debounceTime(this.waitTime),
    distinctUntilChanged()
  );
  subscription: Subscription | undefined;

  constructor() {}

  ngOnInit(): void {
    this.subscription = this.observablePipe.subscribe((input) => {
      this.inputChange.emit(input);
    });
  }

  ngOnDestroy(): void {
    this.subscription!.unsubscribe();
  }

  onInputChange(event: any) {
    this.valueObservable.next(event.target.value);
  }
}
