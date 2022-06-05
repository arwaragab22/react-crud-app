import "./App.css";
import LIST from "./list";
import FORM from "./form";
import React, { Component } from "react";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    courses: [{ name: "html" }, { name: "CSS" }, { name: "js" }],
    placeholdertext: "enter name of course",
  };
  addcourse = (namecourse, e) => {
    e.preventDefault();
    if (namecourse === "") {
      this.setState({ placeholdertext: " error try again " });
    } else {
      let newcourse = { name: namecourse };
      let newcourses = this.state.courses;
      newcourses.push(newcourse);
      this.setState({ courses: newcourses });
      console.log(this.state.courses);
    }
  };
  deletecourse = (e, k) => {
    e.preventDefault();
    let a = this.state.courses.filter((ele, i) => {
      return k !== i;
    });
    this.setState({ courses: a });
  };
  updatecourse = (n, m) => {
    let c = this.state.courses;
    let updcourse = c[m];
    updcourse.name = n;
    this.setState({ courses: c });
   
  };
  render() {
    let courseslist = this.state.courses.map((ele, k) => {
      return (
        <LIST
          index={k}
          courses={ele.name}
          deletecourse={this.deletecourse}
          updatecourse={this.updatecourse}
        />
      );
    });
    return (
      <div className="App">
        <h2>add courses</h2>
        <FORM
          addcourse={this.addcourse}
          placeholdertext={this.state.placeholdertext}
        />
        {courseslist}
      </div>
    );
  }
}

export default App;
