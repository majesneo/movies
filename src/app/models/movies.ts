export interface Movies {
  name: string;
  profile_path: string;
  id: number;
  poster_path: any;
  results?: ResultsEntity[] | null;
  page: number;
  total_results: number;
  dates: Dates;
  genres: any;
  total_pages: number;
  searchRes: string;
  genre: string

  tagline: string;
  homepage: string;

  popularity: number;
  vote_count: number;
  video: boolean;

  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids?: (number)[] | null;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;

}

export interface ResultsEntity {
  genre: string
  genres: string;
  tagline: string;
  homepage: string;
  name: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids?: (number)[] | null;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;

  profile_path: string;

  results?: ResultsEntity[] | null;
  page: number;
  total_results: number;
  dates: Dates;

  total_pages: number;
  searchRes: string;
}


export interface Dates {
  maximum: string;
  minimum: string;
}
