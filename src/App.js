import React from "react";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import MemeGenerator from "./components/MemeGenerator";
import Todo from "./components/Todo";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <Nav />
      <div>
        <Route path="/" exact component={Todo} />
        <Route path="/meme/" component={MemeGenerator} />
        <Route path="/form/" component={Form} />
      </div>
    </div>
  );
}

export default App;
