/* eslint-disable react/prop-types */
import React from 'react';

const Employee = ({ employee, deleteEmployee }) => {

  const removeEmployee = () => {
    // eslint-disable-next-line no-undef
    if (window.confirm(`Notice that ${employee.firstname} ${employee.lastname} will be removed permanently?`)) {
      deleteEmployee(employee.id);
    }
  };

  return (
    <div>

      <h2> {employee.firstname} {employee.lastname} </h2>
      <p>Email: {employee.email} </p>
      <p>phone: {employee.phone} </p>

      <div>
        <button onClick={() => removeEmployee()} >Delete</button>
      </div>

    </div>
  );

};

export default Employee;