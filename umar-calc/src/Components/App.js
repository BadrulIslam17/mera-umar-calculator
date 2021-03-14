import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import AgeStats from "./AgeStats";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: "",
      birthday: "1998-08-04",
      showStats: false
    };
  }

  changeBirthday = () => {
    this.setState({ birthday: this.state.newDate, showStats: true });
    console.log(this.state);
  };
  render() {
    return (
      <div className="App">
        <Form inline>
        <img
            src={'./builali.jpg'}
            alt="Giveup"
            className="image"
            width="220px"
            height="250px"
            /> 


            <img
            src={'./lets leave.jpg'}
            alt="Giveup"
            className="image"
            width="500px"
            height="250px"
            /> 

          <h3>Hello! This Is Badrul Islam</h3>
          <h2>Enter Your Date Of Birth.</h2>
          <FormControl
            type="date"
            onChange={event => this.setState({ newDate: event.target.value })}
          />{" "}
          <Button onClick={() => this.changeBirthday()}>Submit</Button>
        </Form>
        {this.state.showStats ? (
          <div className="fade age-stats">
            <AgeStats date={this.state.birthday} />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default App;
