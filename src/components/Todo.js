import React from "react";
import styled from "styled-components";
import _Paper from "@material-ui/core/Paper";
import _Grid from "@material-ui/core/Grid";
import TodoList from "./TodoListHook";
import Typography from "@material-ui/core/Typography";

const Grid = styled(_Grid)`
  height: 100%;
`;

const Paper = styled(_Paper)`
  padding: 25px 0 10px;
  width: 500px;
`;

const Title = styled.div`
  margin-bottom: 25px;
  color: grey;
`;

function Todo() {
  return(
    <Grid container direction="row" justify="center" alignItems="center">
      <div>
        <Title>
          <Typography variant="h4" align="center" color="inherit">
            ToDo List
          </Typography>
        </Title>
      
        <Paper>
          <TodoList />
        </Paper>
      </div>
    </Grid>
  )
}

export default Todo;