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
        <h3><small>Role | </small>{employee.role}</h3>
        <h3><small>Pronouns | </small>{employee.pronouns}</h3>
        <h3><small>Since | </small>{employee.since}</h3>
        <h3><small>Email | </small>{employee.email}</h3>
        <h3><small>ID | </small>{employee.employeeID}</h3>
        <h4>Work Place |{employee.workPlace}</h4>
        </div>
        </div>
    </div>
  );
}

export default Card;