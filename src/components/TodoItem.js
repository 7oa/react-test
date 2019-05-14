import React from "react";
import styled, { css } from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import _ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const ListItemText = styled(_ListItemText)`
  position: relative;
  &:after {
    content: "";
    height: 1px;
    width: 0%;
    background-color: gray;
    top: 50%;
    left: 10px;
    position: absolute;
    transition: width .5s;
  }
  ${props =>
    props.done === "done" &&
    css`
      span {
        color: gray;
      }
      &:after {
        width: 90%;
      }
    `}
`;

function TodoItem(props) {
  const { id, title, done } = props.item;
  return (
    <ListItem button onClick={() => props.changeDone(id)}>
      <Checkbox checked={done} color="primary" />
      <ListItemText primary={title} done={done ? "done" : ""} />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete" onClick={() => props.deleteItem(id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoItem;
