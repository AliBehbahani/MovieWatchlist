import movies from "../data";
import { makeAutoObservable } from "mobx";

class MovieStore2 {
  movies = movies;

  constructor() {
    makeAutoObservable(this);
  }

  movieDelete = (movieId) => {
    const undeletedMovies = this.movies.filter((movie) => movie.id !== movieId);
    this.movies = undeletedMovies;
  };

  movieTransfer = (oldMovie) => {
    this.movies.push(oldMovie);
    oldMovie.id = this.movies.length + 1;
  };
}

const movieStore2 = new MovieStore2();
export default movieStore2;
