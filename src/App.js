// Where you will build your app
// Import is ES6
import React, { Component } from "react";
import './App.css';
import Namesearch from './components/Namesearch.js';
import employees from "./employees.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import EmailSearch from "./components/Emailsearch";

// import { findRenderedComponentWithType } from 'react-dom/test-utils';



class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };

  removeEmployee = id => {
    // Filter this.state.employees for employees with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

 

  // Map over this.state.employees and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
      
      <Title>Use the Search Tools to Find an Employee!</Title>

      <Namesearch/>
      <EmailSearch/>
   
        
        {this.state.employees.map(employee => (
          <FriendCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            firstname={employee.firstname}
            lastname={employee.lastname}
            image={employee.image}
            email={employee.email}
        
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
