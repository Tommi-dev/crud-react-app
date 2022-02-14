/* eslint-disable react/prop-types */
import React from 'react';
import Employee from '../employee/employee';

const Employees = ({ employees }) => {

  return (
    <div>

      {employees.map(employee =>

        <Employee
          key={employee.id}
          employee={employee}
        />

      )}

    </div>
  );

};

export default Employees;