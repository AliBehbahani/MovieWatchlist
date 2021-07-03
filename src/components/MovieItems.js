import { observer } from "mobx-react";

import DeleteButton from "./buttons/DeleteButton";
import WatchedButton from "./buttons/WatchedButton";
const MovieItems = (props) => {
  return (
    <ul class="list-group">
      <li class="list-group-item">{props.movie.name}</li>
      <DeleteButton movieId={props.movie.id} />
      <WatchedButton oldMovie={props.movie} movieId={props.movie.id} />
    </ul>
  );
};

export default observer(MovieItems);
