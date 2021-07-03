import "./App.css";

import AddButton from "./components/buttons/AddButton";
import MovieList from "./components/MovieList";
import MovieList2 from "./components/MovieList2";

function App() {
  return (
    <div>
      <AddButton />
      <MovieList />
      <MovieList2 />
    </div>
  );
}

export default App;
