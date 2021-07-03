import { observer } from "mobx-react";
import UnwatchButton from "./buttons/UnwatchButton";
import DeleteButton2 from "./buttons/DeleteButton2";
const MovieItems2 = (props) => {
  return (
    <ul class="list-group">
      <li class="list-group-item">{props.movie.name}</li>
      <DeleteButton2 movieId={props.movie.id} />
      <UnwatchButton oldMovie={props.movie} movieId={props.movie.id} />
    </ul>
  );
};

export default observer(MovieItems2);
