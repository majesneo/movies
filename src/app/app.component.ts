import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Movies} from './models/movies';
import {MovieService} from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(protected movie: MovieService) {
  }

  subs: Subscription[] = [];
  trending: Movies | undefined;
  popular: Movies | undefined;
  topRated: Movies | undefined;
  nowPlaying: Movies | undefined;
  latestMovie: Movies | undefined;

  ngOnInit(): void {
    this.subs.push(this.movie.getLatestMovie().subscribe(data => {
      this.latestMovie = data;
      console.log(data);
    }));
    this.subs.push(this.movie.getPopularMovies().subscribe(data => this.popular = data));
    this.subs.push(this.movie.getTopRated().subscribe(data => this.topRated = data));
    this.subs.push(this.movie.getNowPlaying().subscribe(data => this.nowPlaying = data));

  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

}
