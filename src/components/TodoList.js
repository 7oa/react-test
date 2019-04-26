import React from "react";
import TodoItem from "./TodoItem";
import dataList from "../data";
import styled from "styled-components";

const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todoInput: "",
      todos: []
    };
    this.changeDone = this.changeDone.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      todos: dataList
    });
  }

  changeDone(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(item => {
        if (item.id === id) item.done = !item.done;
        return item;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  deleteItem(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.filter(item => item.id !== id);
      return {
        todos: updatedTodos
      };
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  addItem() {
    this.setState(prevState => {
      const maxId = prevState.todos.reduce((accumulator, currentValue) => accumulator.id>currentValue.id ? accumulator.id : currentValue.id);
      const newItem = {
        id: maxId + 1,
        do: this.state.todoInput,
        done: false
      };

      prevState.todos.push(newItem);
      const updatedTodos = prevState.todos;
      return {
        todos: updatedTodos,
        todoInput: ""
      };
    });
  }

  render() {
    var list = this.state.todos.map(item => (
      <TodoItem
        key={item.id}
        item={item}
        changeDone={this.changeDone}
        deleteItem={this.deleteItem}
      />
    ));

    return (
      <React.Fragment>
        <h2>ToDo List</h2>

        <InputWrapper>
          <input
            type="text"
            name="todoInput"
            value={this.state.todoInput}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.addItem}>
            Добавить
          </button>
        </InputWrapper>

        <div>{list}</div>
      </React.Fragment>
    );
  }
}

export default TodoList;
