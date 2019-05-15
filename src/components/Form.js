import React, { Component } from "react";
import styled from "styled-components";
import _Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const Paper = styled(_Paper)`
  padding: 30px;
  width: 800px;
  margin: 30px auto 0;
  box-sizing: border-box;
`;

const FormBlock = styled.div`
  margin-bottom: 30px;
`;

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      sex: "",
      sity: "",
      isVegan: false,
      isKosher: false,
      isLactoseFree: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  render() {
    return (
      <Paper>
        <form>
          <FormBlock>
            <Input
              placeholder="First Name"
              name="firstName"
              type="text"
              onChange={this.handleChange}
            />
            <Input
              placeholder="Last Name"
              name="lastName"
              type="text"
              onChange={this.handleChange}
            />
            <Input
              placeholder="Age"
              name="age"
              type="number"
              onChange={this.handleChange}
            />
          </FormBlock>

          
          <FormBlock>
            <Typography variant="h6" gutterBottom>
              Пол
            </Typography>
            <FormControlLabel
              label="man"
              control={
                <Radio
                  color="primary"
                  name="sex"
                  value="man"
                  checked={this.state.sex === "man"}
                  onChange={this.handleChange}
                />
              }
            />
            <FormControlLabel
              label="woman"
              control={
                <Radio
                  color="primary"
                  name="sex"
                  value="woman"
                  checked={this.state.sex === "woman"}
                  onChange={this.handleChange}
                />
              }
            />
          </FormBlock>

          

          <FormBlock>
            <Typography variant="h6" gutterBottom>Пункт назначения</Typography>
            <Select
              native
              name="sity"
              value={this.state.sity}
              onChange={this.handleChange}
            >
              <option value="" />
              <option value="Москва">Москва</option>
              <option value="Спб">Спб</option>
              <option value="Казань">Казань</option>
              <option value="Рязань">Рязань</option>
              <option value="Тверь">Тверь</option>
            </Select>
          </FormBlock>

          <FormBlock>
            <Typography variant="h6" gutterBottom>Диетологические ограничения</Typography>

            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={this.state.isVegan}
                  onChange={this.handleChange}
                  name="isVegan"
                />
              }
              label="Vegan"
            />

            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={this.state.isKosher}
                  onChange={this.handleChange}
                  name="isKosher"
                />
              }
              label="Kosher"
            />

            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  checked={this.state.isLactoseFree}
                  onChange={this.handleChange}
                  name="isLactoseFree"
                />
              }
              label="Lactose Free"
            />
          </FormBlock>
        </form>
        <hr />
        <Typography variant="body1" gutterBottom>
          <Typography variant="h6" gutterBottom>
            <font color="#3AC1EF">Entered information:</font>
          </Typography>
          <p>
            Your name: {this.state.firstName} {this.state.lastName}
          </p>
          <p>Your age: {this.state.age} </p>
          <p>Your gender: {this.state.sex}</p>
          <p>Your destination: {this.state.sity}</p>
          <p>
            Your dietary restrictions: <br />
            Vegan: {this.state.isVegan ? "Yes" : "No"} <br />
            Kosher: {this.state.isKosher ? "Yes" : "No"} <br />
            LactoseFree: {this.state.isLactoseFree ? "Yes" : "No"} <br />
          </p>
      </Typography>
        
      </Paper>
    );
  }
}

export default Form;
