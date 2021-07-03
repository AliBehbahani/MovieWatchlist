import movieStore2 from "../../stores/movieStore2";
import { DeleteButtonStyled } from "../../styled";

const DeleteButton2 = (props) => {
  const handleDelete = () => {
    movieStore2.movieDelete(props.movieId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>DELETE</DeleteButtonStyled>;
};

export default DeleteButton2;
