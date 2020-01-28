import React, { useState, } from "react";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import data from "./data/employeedata.json";

function App() {
  //use cards as the state and pass it the data from our file
  const [cards, setCards] = useState(data);

  //Sort the table by at least one category
  //sortByName
  function sortByName() {
    let sortedArray = cards;
    sortedArray.sort(function(a, b) {
      var employeeA = a.lastName;
      var employeeB = b.lastName;
      if (employeeA < employeeB) {
        return -1;
      }
      if (employeeA > employeeB) {
        return 1;
      }
      return 0;
    });
    setCards([...sortedArray]);
  }

//sort by tenure
function sortByTenure() {
    let sortedArray = cards;
    sortedArray.sort(function(a, b) {
      var employeeA = a.since;
      var employeeB = b.since;
      if (employeeA < employeeB) {
        return -1;
      }
      if (employeeA > employeeB) {
        return 1;
      }
      return 0;
    });
    setCards([...sortedArray]);
  }

// Filter the users by at least one property.
// filter In Office
 function filterInOffice (){
   const filteredArray = [];
   for (let i = 0; i < data.length; i++){
  const employee = data[i];
  if (employee.workPlace === "In Office"){
    filteredArray.push(employee);
    }
  }
  setCards(filteredArray);
 }

// filter remote
function filterRemote (){
  const filteredArray = [];
  for (let i = 0; i < data.length; i++){
 const employee = data[i];
 if (employee.workPlace === "Remote"){
   filteredArray.push(employee);
   }
 }
 setCards(filteredArray);
}





//clears filters and displays all employees
  function filterNone() {
    setCards(data);
  }

  return (
    <div className="App">
      <Header />
      <section className="container main">
        <div className="row">
          <div className="col-4 button-col">
            <p className="button-label">Sort by:</p>
            <button
              onClick={() => sortByName()}
              className="button">
              Name
            </button>
            <button
              onClick={() => sortByTenure()}
              className="button">
              Time Employeed
            </button>
          </div>
          <div className="col-4 button-col">
          <button 
          onClick={() => filterNone()} 
          className="button">
              View All
            </button>
          </div>
          <div className="col-4 button-col">
            <p className="button-label">Filter by:</p>
            <button 
            onClick={() => filterInOffice()} 
            className="button ">
              In Office
            </button>
            <button
              onClick={() => filterRemote()}
              className="button"
            >
              Remote
            </button>
            
          </div>
        </div>
        <div className="row grid">
          <div className="col-12">
            <div className="row employee-cards">
              {cards.map(function(e) {
                return <Card employee={e} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;