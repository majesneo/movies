import { Component, Injectable, Input, OnInit, Output } from '@angular/core';
import { Movies, ResultsEntity } from '../../models/movies';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  @Input() movies: Movies;

  @Input() title: string;

  @Input() topRated: Movies[] = [];

  @Input() favorites: Movies[] = [];


  constructor(public movieService: MovieService) {
  }

  ngOnInit(): void {

  }


  getFavorites() {
    if (localStorage.getItem('fov') === null) {
      return this.favorites;
    } else {

      this.favorites = JSON.parse(localStorage.getItem('fov'));
      return this.favorites;
    }
  }

  addFavorites(movie: Movies) {

    for (let i = 0; i < this.favorites.length; i++) {
      if (movie.id == this.favorites[i].id) {
        return;
      }
    }

    this.favorites.push(movie);


    let favorites = [];
    if (localStorage.getItem('fov') === null) {
      favorites.push(movie);

      localStorage.setItem('fov', JSON.stringify(favorites));
    } else {

      favorites = JSON.parse(localStorage.getItem('fov'));
      favorites.push(movie);
      localStorage.setItem('fov', JSON.stringify(favorites));
    }

  }

  delFavorites(movie: Movies) {
    for (let i = 0; i < this.favorites.length; i++) {

      console.log(movie.id == this.favorites[i].id);

      if (movie.id == this.favorites[i].id) {

        this.favorites.splice(i, 1);
        localStorage.setItem('fov', JSON.stringify(this.favorites));
      }
    }
  }
}

