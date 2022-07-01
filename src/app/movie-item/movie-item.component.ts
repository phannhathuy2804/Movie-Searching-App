import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { movie } from '../app.component';
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css'],
})
export class MovieItemComponent implements OnInit, OnChanges {
  @Input()
  movieInfo: any = null;
  @Input()
  input: string | null = null;

  displayStyle = 'none';
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['input'] != undefined) {
      this.input = changes['input'].currentValue;
    }
    if (changes['movieInfo'] != undefined) {
      this.movieInfo!.Title = changes['movieInfo'].currentValue.Title;
      this.movieInfo!.Year = changes['movieInfo'].currentValue.Year;
      this.movieInfo!.Poster = changes['movieInfo'].currentValue.Poster;
      this.movieInfo!.Rated = changes['movieInfo'].currentValue.Rated;
      this.movieInfo!.Plot = changes['movieInfo'].currentValue.Plot;
      this.movieInfo!.Director = changes['movieInfo'].currentValue.Director;
    }
  }
  openPopup() {
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
  ngOnInit(): void {}
}
