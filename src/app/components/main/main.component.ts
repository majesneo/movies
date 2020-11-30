import {Component, Injectable, Input, OnInit, Output} from '@angular/core';
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

  // @ts-ignore
  getFavorites() {
    if (localStorage.getItem('fov') === null) {
      return this.favorites;
    } else {
      // @ts-ignore
      this.favorites = JSON.parse(localStorage.getItem('fov'));
      return this.favorites;
    }
  }

  addFavorites(movie: ResultsEntity) {
    // @ts-ignore
    this.favorites.push(movie);
    let favorites = [];
    if (localStorage.getItem('fov') === null) {
      favorites.push(movie);
      // @ts-ignore
      localStorage.setItem('fov', JSON.stringify(favorites));
    } else {
      // @ts-ignore
      favorites = JSON.parse(localStorage.getItem('fov'));
      favorites.push(movie);
      localStorage.setItem('fov', JSON.stringify(favorites));
    }

  }

  delFavorites(movie: ResultsEntity) {
    for (let i = 0; i < this.favorites.length; i++) {
      // @ts-ignore
      console.log(movie.id == this.favorites[i].id);
      // @ts-ignore
      if (movie.id == this.favorites[i].id) {
        this.favorites.splice(i, 1);
        localStorage.setItem('fov', JSON.stringify(this.favorites));
      }
    }
  }
}

