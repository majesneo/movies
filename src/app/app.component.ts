import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Movies, ResultsEntity} from './models/movies';
import {MovieService} from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private movieService: MovieService) {
  }

  subs: Subscription[] = [];
  // @ts-ignore
  trending: Movies;
  // @ts-ignore
  popular: Movies;
  // @ts-ignore
  topRated: Movies;
  // @ts-ignore
  nowPlaying: Movies;
  // @ts-ignore
  latestMovie: Movies;
  // @ts-ignore
  headerBGUrl: string;

  sliderConfig = {
    slidesToShow: 9,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false
  };
  // @ts-ignore
  searchStr = '';

  // @ts-ignore
  searchRes: any;
  page: number = 1;

  ngOnInit(): void {

    this.subs.push(this.movieService.getLatestMovie().subscribe(data => {
      this.latestMovie = data;
    }));
    this.subs.push(this.movieService.getPopularMovies().subscribe(data => {
      this.popular = data;

    }));
    this.subs.push(this.movieService.getTopRated(this.page).subscribe(data => {
      console.log(data);
      this.topRated = data;

    }));
    this.subs.push(this.movieService.getNowPlaying().subscribe(data => {
      this.nowPlaying = data;

    }));
    this.subs.push(this.movieService.getTrending().subscribe(data => {

      this.trending = data;

      // @ts-ignore
      this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + this.trending.results[0].backdrop_path;
    }));
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

  // tslint:disable-next-line:typedef
  searchMovies() {
    this.movieService.searchMovie(this.searchStr).subscribe(res => {
      // @ts-ignore
      console.log(res.results);
      // @ts-ignore
      this.searchRes = res.results;
    });
  }

}
