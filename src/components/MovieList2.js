import MovieItems2 from "./MovieItems2";
import movieStore2 from "../stores/movieStore2";
import SearchBar from "./SearchBar";

import { useState } from "react";
import { observer } from "mobx-react";
import { MovieWrapper2, OneRow } from "../styled";
const MovieList2 = () => {
  const [query, setQuery] = useState("");

  const filterMovies = movieStore2.movies.filter((movie) =>
    movie.name.toLowerCase().includes(query.toLowerCase())
  );
  const movieList2 = filterMovies.map((movie) => <MovieItems2 movie={movie} />);

  return (
    <div>
      <MovieWrapper2>
        <h1>Watched</h1>
        <h2>{movieStore2.movies.length}</h2>
        <SearchBar setQuery={setQuery} />
        <OneRow>{movieList2}</OneRow>
      </MovieWrapper2>
    </div>
  );
};

export default observer(MovieList2);
