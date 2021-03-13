import React, { Component } from "react";
import "./index.css";
import App from "./App";

//make years and days array
function generateArray(start, end) {
  let arr = [];
  for (start; start <= end; start++) {
    arr.push(start);
  }
  return arr;
}

const months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
//1-31
const days = generateArray(1, 31);
//1900-today
const years = generateArray(1900, new Date().getFullYear());

//calculate age
function calculateAge(birthday) {
  //milliseconds in a year 1000*24*60*60*365.24 = 31556736000;
  let today = new Date(),
    //birthay has 'Dec 25 1998'
    dob = new Date(birthday),
    //difference in milliseconds
    diff = today.getTime() - dob.getTime(),
    //convert milliseconds into years
    years = Math.floor(diff / 31556736000),
    //1 day has 86400000 milliseconds
    days_diff = Math.floor((diff % 31556736000) / 86400000),
    //1 month has 30.4167 days
    months = Math.floor(days_diff / 30.4167),
    days = Math.floor(days_diff % 30.4167);

  console.log(`${years} years ${months} months ${days} days`);
  return `${years} years ${months} months ${days} days`;
}

export default class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: 29,
      month: "Apr",
      year: 1993,
      age: "Rate My Cheating Skills"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
  }

  handleDayChange(e) {
    this.setState({
      day: e.target.value
    });
  }

  handleMonthChange(e) {
    this.setState({
      month: e.target.value
    });
  }

  handleYearChange(e) {
    this.setState({
      year: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const day = this.state.day,
      month = this.state.month,
      year = this.state.year;

    let age = calculateAge(`${month} ${day} ${year}`);

    this.setState({
      age: age
    });
  }

  render() {
    return (
      <div>
          < App />
        <h1>A.I. Age Calc From CodePen</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="container">
            <Input
              arr={days}
              handleChange={this.handleDayChange}
              val={this.state.day}
            />
            <Input
              arr={months}
              handleChange={this.handleMonthChange}
              val={this.state.month}
            />
            <Input
              arr={years}
              handleChange={this.handleYearChange}
              val={this.state.year}
            />
          </div>
          <button type="submit">Calculate</button>
        </form>
        <article>
          <h2>Your age is</h2>
          <span>{this.state.age}</span>
        </article>
      </div>
    );
  }
}

function Input(props) {
  let options = props.arr.map((item) => (
    <option value={item} key={item}>
      {item}
    </option>
  ));

  return (
    <select onChange={props.handleChange} value={props.val}>
      {options}
    </select>
  );
  }