import { DeleteButtonStyled } from "../../styled";
import movieStore2 from "../../stores/movieStore2";
import movieStore from "../../stores/movieStore";
const WatchedButton = (props) => {
  const handleSubmit = (event) => {
    movieStore.movieDelete(props.movieId);
    event.preventDefault();
    movieStore2.movieTransfer(props.oldMovie);
  };

  return (
    <div>
      <DeleteButtonStyled onClick={handleSubmit}>Watched</DeleteButtonStyled>
    </div>
  );
};

export default WatchedButton;
