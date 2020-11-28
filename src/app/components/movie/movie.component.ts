import {Component, OnInit} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {
  // movie: Object;

  constructor(
    private movieService: MovieService,
    private router: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
  }

  // ngOnInit(): void {
  //   this.router.params.subscribe((params) => {
  //     const id = params['id'];
  //     this.movieService.getMovie(id).subscribe(movie => {
  //       this.movie = movie;
  //     });
  //   });
  // }
  //

}
