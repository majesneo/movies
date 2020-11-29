import {Component, Input, OnInit} from '@angular/core';
import {Movies} from '../../models/movies';
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
  page: number = 1;

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
  }

  moreMovies() {
    this.movieService.getTopRated(this.page++);
  }
}
