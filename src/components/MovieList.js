import MovieItems from "./MovieItems";
import movieStore from "../stores/movieStore";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { observer } from "mobx-react";
import { MovieWrapper, OneRow } from "../styled";
const MovieList = () => {
  const [query, setQuery] = useState("");

  const filterMovies = movieStore.movies.filter((movie) =>
    movie.name.toLowerCase().includes(query.toLowerCase())
  );

  const movieList = filterMovies.map((movie) => <MovieItems movie={movie} />);

  return (
    <div>
      <MovieWrapper>
        <h1>WatchList</h1>
        <h2>{movieStore.movies.length}</h2>
        <SearchBar setQuery={setQuery} />
        <OneRow>{movieList}</OneRow>
      </MovieWrapper>
    </div>
  );
};

export default observer(MovieList);
