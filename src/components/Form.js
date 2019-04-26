import React, { Component } from "react";

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
      <main>
        <form>
          <input
            placeholder="First Name"
            name="firstName"
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Last Name"
            name="lastName"
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Age"
            name="age"
            type="number"
            onChange={this.handleChange}
          />
          <br />

          {/* Здесь создайте переключатели для выбора пола */}
          <div>
            <h3>Пол</h3>
            <label>
              <input
                type="radio"
                name="sex"
                value="man"
                checked={this.state.sex === "man"}
                onChange={this.handleChange}
              />
              man
            </label>
            <label>
              <input
                type="radio"
                name="sex"
                value="woman"
                checked={this.state.sex === "woman"}
                onChange={this.handleChange}
              />
              woman
            </label>
          </div>

          <br />

          <div>
            <h3>Пункт назначения</h3>
            <select
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
            </select>
          </div>
          <br />

          {/* Здесь создайте флажки для указания диетологических ограничений */}
          <div>
            <h3>Диетологические ограничения</h3>
            <label>
              <input
                type="checkbox"
                name="isVegan"
                checked={this.state.isVegan}
                onChange={this.handleChange}
              />
              Vegan
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="isKosher"
                checked={this.state.isKosher}
                onChange={this.handleChange}
              />
              Kosher
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="isLactoseFree"
                checked={this.state.isLactoseFree}
                onChange={this.handleChange}
              />
              Lactose Free
            </label>
          </div>
          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>
          <font color="#3AC1EF">Entered information:</font>
        </h2>
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
      </main>
    );
  }
}

export default Form;
