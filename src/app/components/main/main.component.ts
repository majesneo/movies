import {Component, Input, OnInit, Output} from '@angular/core';
import {Movies, ResultsEntity} from '../../models/movies';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  // @ts-ignore
  @Input() movies: Movies;
  // @ts-ignore
  @Input() title: string;
  // @ts-ignore
  @Input() topRated: Movies;
// @ts-ignore
  @Input() favorites: Movies[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
  }

  getFavorites() {
    return this.favorites;
  }

  addFavorites(movie: ResultsEntity) {
    // @ts-ignore
    this.favorites.push(movie);
    console.log(this.favorites, 'Add');
  }

  delFavorites(movie: ResultsEntity) {
    for (let i = 0; i < this.favorites.length; i++) {
      // @ts-ignore
      if (movie === this.favorites[i]) {
        this.favorites.splice(i, 1);
        console.log(this.favorites, 'Del');
      }
    }
  }
}

