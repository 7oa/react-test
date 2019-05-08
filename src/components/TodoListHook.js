import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import dataList from "../data";
import _Input from "@material-ui/core/Input";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Input = styled(_Input)`
  width: 100%;
  padding: 0 25px;
  box-sizing: border-box;
`;

const Footer = styled.div`
  padding: 10px 25px 0;
  border-top: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonsList = styled.div`
  width: 230px;
  justify-content: space-between;
  display: flex;
`;

function TodoList() {
  const [todoInput, setTodoInput] = useState(""),
    [todos, setTodos] = useState(dataList),
    [view, setView] = useState("all");

  const changeDone = id => {
    const updatedTodos = todos.map(item => {
      if (item.id === id) item.done = !item.done;
      return item;
    });
    setTodos(updatedTodos);
  };

  const deleteItem = id => {
    const updatedTodos = todos.filter(item => item.id !== id);
    setTodos(updatedTodos);
  };

  const handleChange = event => {
    const { value } = event.target;
    setTodoInput(value);
  };

  const addItem = event => {
    let maxId = 0;

    if (todos.length > 0) {
      maxId = todos.reduce((accumulator, currentValue) =>
        accumulator.id > currentValue.id ? accumulator.id : currentValue.id
      );
    }

    const newItem = {
      id: maxId + 1,
      title: todoInput,
      done: false
    };

    todos.push(newItem);
    const updatedTodos = todos;
    setTodos(updatedTodos);
    setTodoInput("");

    event.preventDefault();
  };

  const countItems = param => {
    switch (param) {
      case "all":
        return todos.length;
      case "done":
        const doneItems = todos.filter(item => item.done === true);
        return doneItems.length;
      default:
        break;
    }
  };

  var todosFilter;
  switch (view) {
    case "all":
      todosFilter = todos;
      break;
    case "active":
      todosFilter = todos.filter(item => item.done === false);
      break;
    case "complated":
      todosFilter = todos.filter(item => item.done === true);
      break;
    default:
      break;
  }

  var list = todosFilter.map(item => (
    <TodoItem
      key={item.id}
      item={item}
      changeDone={changeDone}
      deleteItem={deleteItem}
    />
  ));

  return (
    <React.Fragment>
      <form onSubmit={addItem}>
        <Input
          name="todoInput"
          placeholder="Add new item"
          value={todoInput}
          onChange={handleChange}
        />
      </form>
      {countItems("all") > 0 && (
        <React.Fragment>
          <List>{list}</List>
          <Footer>
            <Typography>
              Done {countItems("done")} from {countItems("all")}
            </Typography>
            <ButtonsList>
              <Button
                size="small"
                variant="outlined"
                color={view === "all" ? "primary" : "default"}
                onClick={() => setView("all")}
              >
                All
              </Button>
              <Button
                size="small"
                variant="outlined"
                color={view === "active" ? "primary" : "default"}
                onClick={() => setView("active")}
              >
                Active
              </Button>
              <Button
                size="small"
                variant="outlined"
                color={view === "complated" ? "primary" : "default"}
                onClick={() => setView("complated")}
              >
                Complated
              </Button>
            </ButtonsList>
          </Footer>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default TodoList;
