import React, { Component } from "react";
import "./App.css";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: "1", name: "Max", age: "28" },
        { id: "2", name: "Manu", age: "29" },
        { id: "3", name: "Stephanie", age: "26" }
      ],
      otherState: "some other value",
      showPersons: false
    };
    console.log("Contructor is called...");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps is called...");
    return state;
  }

  componentDidMount() {
    console.log("Component did mount...");
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // make copy new object which is person
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = personIndex => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    console.log("render is called...");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit Clicked={this.togglePersonHandler} />
        {persons}
      </div>
    );
  }
}
export default App;
