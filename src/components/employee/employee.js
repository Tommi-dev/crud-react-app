/* eslint-disable react/prop-types */
import React from 'react';

const Employee = ({ employee }) => {

  return (
    <div>

      <h2> {employee.firstname} {employee.lastname} </h2>
      <p>Email: {employee.email} </p>
      <p>phone: {employee.phone} </p>

    </div>
  );

};

export default Employee;