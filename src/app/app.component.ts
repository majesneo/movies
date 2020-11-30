import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {Movies, ResultsEntity} from './models/movies';
import {MovieService} from './services/movie.service';
import {MovieComponent} from './components/movie/movie.component';
import {MainComponent} from './components/main/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private movieService: MovieService,
              public movieComponent: MovieComponent,
              public mainComponent: MainComponent
  ) {

  }

  // @ts-ignore


  subs: Subscription[] = [];

  // @ts-ignore
  trending: Movies[];

  // @ts-ignore
  popular: Movies = [];
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
  id: boolean;
  // @ts-ignore
  searchRes: any;
  page: number = 1;

  // @ts-ignore
  @Input() modal: boolean;

  opened = false;

  // @ts-ignore
  favorites: Movies[];

  ngOnInit(): void {

    // @ts-ignore


    this.subs.push(this.movieService.getLatestMovie().subscribe(data => {
      this.latestMovie = data;
    }));
    this.subs.push(this.movieService.getPopularMovies().subscribe(data => {
      this.popular = data;

    }));
    this.subs.push();
    this.subs.push(this.movieService.getTopRated(this.page).subscribe(data => {
      this.topRated = data;
    }));

    this.subs.push(this.movieService.getNowPlaying().subscribe(data => {
      this.nowPlaying = data;

    }));
    this.subs.push(this.movieService.getTrending().subscribe(data => {

      // @ts-ignore
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
      this.topRated = data;
    });
  }

  fov() {
    this.favorites = this.mainComponent.getFavorites();
    console.log(this.favorites);
  }
}
