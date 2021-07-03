import { DeleteButtonStyled } from "../../styled";
import movieStore2 from "../../stores/movieStore2";
import movieStore from "../../stores/movieStore";
const UnwatchButton = (props) => {
  const handleSubmit = (event) => {
    movieStore2.movieDelete(props.movieId);
    event.preventDefault();
    movieStore.movieTransfer(props.oldMovie);
  };

  return (
    <div>
      <DeleteButtonStyled onClick={handleSubmit}>UnWatch</DeleteButtonStyled>
    </div>
  );
};

export default UnwatchButton;
