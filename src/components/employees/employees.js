/* eslint-disable react/prop-types */
import React from 'react';
import Employee from '../employee/employee';

const Employees = ({ employees, deleteEmployee }) => {

  return (
    <div>

      {employees.map(employee =>

        <Employee
          key={employee.id}
          employee={employee}
          deleteEmployee={deleteEmployee}
        />

      )}

    </div>
  );

};

export default Employees;