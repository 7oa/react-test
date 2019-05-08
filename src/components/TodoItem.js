import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

function TodoItem(props) {
  const { id, title, done } = props.item;
  return (
    <ListItem
      button
      done={done ? "done" : ""}
      onClick={() => props.changeDone(id)}
    >
      <Checkbox checked={done} color="primary" />
      <ListItemText primary={title} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={() => props.deleteItem(id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoItem;
