import movieStore from "../../stores/movieStore";
import { DeleteButtonStyled } from "../../styled";

const DeleteButton = (props) => {
  const handleDelete = () => {
    movieStore.movieDelete(props.movieId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>DELETE</DeleteButtonStyled>;
};

export default DeleteButton;
