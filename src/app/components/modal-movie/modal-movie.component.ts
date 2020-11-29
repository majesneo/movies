/*
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Movies} from '../../models/movies';
import {MovieService} from '../../services/movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modal-movie',
  templateUrl: './modal-movie.component.html',
  styleUrls: ['./modal-movie.component.sass']
})
export class ModalMovieComponent implements OnInit {
  @Output() close = new EventEmitter;

  // @ts-ignore
  movie: Movies;
  // @ts-ignore
  cast: Array<Object>;


  constructor(
    private movieService: MovieService,
    private router: ActivatedRoute,
  ) {
  }


  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id = params['238'];
      console.log(id);
      this.movieService.getMovie(id).subscribe(movie => {
        console.log(movie);
        this.movie = movie;

      });
    });

    this.router.params.subscribe((params) => {
      const id = params['238'];
      this.movieService.getMovieCredits(id).subscribe(res => {
        // @ts-ignore
        res.cast = res.cast.filter((item) => {
          return item.profile_path;
        });

        // @ts-ignore
        this.cast = res.cast.slice(0, 4);
      });
    });
  }
}
*/
