// import React from "./node_modules/react";
import React from "react";
import "./Card.css";

function Card({ employee }) {

  return (
    <div className="col-4">
      <div className="Card">
        <h1 className="Name">
          {employee.firstName} {employee.lastName}
        </h1>
        <div className="data">
        <div className="dataRow">
          <small className="dataType">Role | </small>
          <h3 className="dataCol"> {employee.role}</h3>
        </div>
        <br/>
        <div className="dataRow">
          <small className="dataType">Pronouns | </small>
          <h3 className="dataCol"> {employee.pronouns}</h3>
          </div>
          <br/>
        <div className="dataRow">
          <small className="dataType">Since | </small>
          <h3 className="dataCol"> {employee.since}</h3>
          </div>
          <br/>
        <div className="dataRow">
          <small className="dataType">Email | </small>
          <h4 className="dataCol"> {employee.email}</h4>
          </div>
          <br/>
        <div className="dataRow">
          <small className="dataType">Work Place |</small>
          <h3 className="dataCol"> {employee.workPlace}</h3>
          </div>


        {/* <h3><small>Role | </small>{employee.role}</h3>
        <h3><small>Pronouns | </small>{employee.pronouns}</h3>
        <h3><small>Since | </small>{employee.since}</h3>
        <h3><small>Email | </small>{employee.email}</h3>
        <h3><small>ID | </small>{employee.employeeID}</h3>
        <h4><small>Work Place |</small>{employee.workPlace}</h4> */}
        </div>
        </div>
    </div>
  );
}

export default Card;