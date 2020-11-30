import {Component, Input, OnInit, Output} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {
  // @ts-ignore
  movie: any;
  // @ts-ignore
  cast: any;

 // @ts-ignore
  @Output() modal: boolean;

  // @ts-ignore
  @Input() id: boolean = true;


  constructor(
    private movieService: MovieService,
    private router: ActivatedRoute,
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
