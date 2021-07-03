import movieStore from "../../stores/movieStore";
import { useState } from "react";
const AddButton = () => {
  const [movie, setMovie] = useState({ name: "" });
  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    movieStore.movieCreate(movie);
  };

  return (
    <div>
      <form class="input-group mb-3" onSubmit={handleSubmit}>
        <input
          type="text"
          class="form-control"
          placeholder="Your Movie"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={handleChange}
          name="name"
          value={movie.name}
          required="required"
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="submit">
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddButton;
