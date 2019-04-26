import React from "react";
import styled, { css } from "styled-components";

const Item = styled.div`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  padding: 5px;
  
`;
const ItemContent = styled.label`
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      text-decoration: line-through;
      color: #ccc;
    `}
`;

const Delete = styled.button`
  margin: 0 0 0 5px;
  padding: 0;
  border: none;
  background: none;
  font-weight: bold;
  cursor: pointer;
`;

function TodoItem(props) {
  return (
    <Item>
      <ItemContent done={props.item.done}>
        <input
          type="checkbox"
          checked={props.item.done}
          onChange={() => props.changeDone(props.item.id)}
        />
        <span>{props.item.do}</span>
      </ItemContent>

      <Delete type="button" onClick={() => props.deleteItem(props.item.id)}>X</Delete>
    </Item>
  );
}

export default TodoItem;
