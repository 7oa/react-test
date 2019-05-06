import React, { useState } from "react";
import TodoItem from "./TodoItem";
import dataList from "../data";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

function TodoList(){
  const
    [todoInput, setTodoInput] = useState(""),
    [todos, setTodos] = useState(dataList);

  const changeDone = (id) => {
    const updatedTodos = todos.map(item => {
      if (item.id === id) item.done = !item.done;
      return item;
    });
    setTodos(updatedTodos);
  }

  const deleteItem = (id) => {
    const updatedTodos = todos.filter(item => item.id !== id);
    setTodos(updatedTodos);
  }

  const handleChange = (event) => {
    const { value } = event.target;
    setTodoInput(value);
  }

  const addItem = () => {
    const maxId = todos.reduce((accumulator, currentValue) => accumulator.id>currentValue.id ? accumulator.id : currentValue.id);
    const newItem = {
      id: maxId + 1,
      do: todoInput,
      done: false
    };

    todos.push(newItem);
    const updatedTodos = todos;
    setTodos(updatedTodos);
    setTodoInput("");
  }

  
    var list = todos.map(item => (
      <TodoItem
        key={item.id}
        item={item}
        changeDone={changeDone}
        deleteItem={deleteItem}
      />
    ));

    return (
      <React.Fragment>
        <h2>ToDo List</h2>

        <InputWrapper>
          <input
            type="text"
            name="todoInput"
            value={todoInput}
            onChange={handleChange}
          />
          <button type="button" onClick={addItem}>
            Добавить
          </button>
        </InputWrapper>

        <div>{list}</div>
      </React.Fragment>
    );
  }


export default TodoList;
