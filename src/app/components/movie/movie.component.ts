import { Component, Input, OnInit, Output } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movies, } from 'src/app/models/movies';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {

  movie: Movies;

  cast: Movies[] = [];


  @Output() modal: boolean;


  @Input() id: boolean = true;


  constructor(
    public movieService: MovieService,
    public router: ActivatedRoute,
  ) {
  }


  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id = params['id'];

      this.movieService.getMovie(id).subscribe(movie => {
        console.log(movie);

        // @ts-ignore
        this.movie = movie;

      });
    });

    this.router.params.subscribe((params) => {
      const id = params['id'];
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
