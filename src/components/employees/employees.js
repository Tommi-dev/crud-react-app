/* eslint-disable react/prop-types */
import React from 'react';
import Employee from '../employee/employee';
import './employees.css';

const Employees = ({ employees, deleteEmployee, updateEmployee }) => {

  return (
    <div className='employees-container' >
      <h2>Employees</h2>

      {employees.map(employee =>

        <Employee
          key={employee.id}
          employee={employee}
          deleteEmployee={deleteEmployee}
          updateEmployee={updateEmployee}
        />

      )}

    </div>
  );

};

export default Employees;