import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movies} from '../models/movies';


const enum endpoint {
  latest = '/movie/latest',
  now_playing = '/movie/now_playing',
  popular = '/movie/popular',
  top_rated = '/movie/top_rated',
  trending = '/trending/all/week',
  search = '/search/movie'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private URL = 'https://api.themoviedb.org/3';
  private API_KEY = environment.api;

  constructor(private http: HttpClient) {
  }

  getLatestMovie(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.latest}`, {
      params: {
        api_key: this.API_KEY
      }
    });
  }

  getNowPlaying(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.now_playing}`, {
      params: {
        api_key: this.API_KEY
      }
    });
  }


  getPopularMovies(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.popular}`, {
      params: {
        api_key: this.API_KEY
      }
    });
  }

  getTopRated(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.top_rated}`, {
      params: {
        api_key: this.API_KEY
      }
    });
  }

  getTrending(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.trending}`, {
      params: {
        api_key: this.API_KEY
      }
    });
  }

  searchMovie(str: string): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.search}&query='${str}'`, {
      params: {
        api_key: this.API_KEY
      }
    });
  }


  // getMovie(id: string) {
  //   return this.http.get(`${this.URL}${id}`, {
  //     params: {
  //       api_key: this.API_KEY
  //     }
  //   });
  // }
}
