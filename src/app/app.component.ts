import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { FetchDataService } from './services/fetch-data.service';

export interface movie {
  Title: String;
  Year: String;
  Poster: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo-code';
  movieInfo: movie | null = null;
  input: string | null = null;
  subscriptions: Subscription[] = [];
  constructor(private fetchDataService: FetchDataService) {}

  onInputChanged(input: string): void {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe;
    });
    this.fetchDataService.fetchData(input).subscribe((data: any) => {
      this.movieInfo = data;
    });
    this.input = input;
  }
}
