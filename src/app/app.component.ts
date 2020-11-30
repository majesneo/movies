
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { Movies } from './models/movies';
import { MovieService } from './services/movie.service';
import { MovieComponent } from './components/movie/movie.component';
import { MainComponent } from './components/main/main.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(public movieService: MovieService,
    public movieComponent: MovieComponent,
    public mainComponent: MainComponent,
  ) {

  }


  subs: Subscription[] = [];


  trending: Movies;


  popular: Movies;
  topRated: Movies;

  nowPlaying: Movies;

  latestMovie: Movies;

  headerBGUrl: string;

  sliderConfig = {
    slidesToShow: 9,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false
  };

  searchStr = '';


  id: boolean;

  searchRes: '';
  page: number = 1;


  @Input() modal: boolean;

  opened = false;


  favorites: Movies[];

  ngOnInit(): void {

    this.subs.push(this.movieService.getLatestMovie().subscribe(data => {
      this.latestMovie = data;
    }));
    this.subs.push(this.movieService.getPopularMovies().subscribe(data => {

      this.popular = data;

    }));
    this.subs.push();
    this.subs.push(this.movieService.getTopRated(this.page).subscribe(data => {

      // @ts-ignore
      this.topRated = data;
    }));

    this.subs.push(this.movieService.getNowPlaying().subscribe(data => {
      this.nowPlaying = data;

    }));
    this.subs.push(this.movieService.getTrending().subscribe(data => {


      this.trending = data;

      this.headerBGUrl = 'https://image.tmdb.org/t/p/original' + this.trending.results[0].backdrop_path;
    }));
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }


  searchMovies() {
    this.movieService.searchMovie(this.searchStr).subscribe(res => {


      // @ts-ignore
      this.searchRes = res.results;
      this.searchStr = '';
    });
  }

  addFavor() {

    // @ts-ignore
    this.favorites = this.mainComponent.getFavorites();
    console.log('favoritesADDDDD', this.favorites);
  }

  moreMovies() {
    this.page++;
    console.log(this.page);
    this.movieService.getTopRated(this.page).subscribe(data => {

      // @ts-ignore
      this.topRated = data;
    });
  }

  fov() {

    // @ts-ignore
    this.favorites = this.mainComponent.getFavorites();
    console.log(this.favorites);
  }
}
