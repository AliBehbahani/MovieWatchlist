import movies from "../data";
import { makeAutoObservable } from "mobx";

class MovieStore {
  movies = movies;

  constructor() {
    makeAutoObservable(this);
  }

  movieCreate = (movie) => {
    this.movies.push(movie);
    movie.id = this.movies.length + 1;
  };
  movieDelete = (movieId) => {
    const undeletedMovies = this.movies.filter((movie) => movie.id !== movieId);
    this.movies = undeletedMovies;
  };
  movieTransfer = (oldMovie) => {
    this.movies.push(oldMovie);
    oldMovie.id = this.movies.length + 1;
  };
}
const movieStore = new MovieStore();
export default movieStore;
