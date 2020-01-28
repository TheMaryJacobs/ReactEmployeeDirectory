import React, { useState, } from "react";
import "./App.css";
import Header from "./Components/Header";
import Card from "./Components/Card";
import data from "./data/employeedata.json";


  return (
    <div className="App">
      <Header />
      <section className="container main">
        <div className="row">
          <div className="col-4 button-col">
            <p className="button-label">Sort by:</p>
            <button
              // onClick={() => sortByName()}
              className="button">
              Name
            </button>
            <button
              // onClick={() => sortByTenure()}
              className="button">
              Time Employeed
            </button>
          </div>
          <div className="col-4 button-col">
          <button 
          // onClick={() => filterNone()} 
          className="button">
              View All
            </button>
          </div>
          <div className="col-4 button-col">
            <p className="button-label">Filter by:</p>
            <button 
            // onClick={() => filterOver18()} 
            className="button ">
              18 +
            </button>
            <button
              // onClick={() => filterUnder18()}
              className="button"
            >
              - 18
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
// }

export default App;