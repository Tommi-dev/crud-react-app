/* eslint-disable react/prop-types */
import React from 'react';
import Employee from '../employee/employee';

const Employees = ({ employees, deleteEmployee, updateEmployee }) => {

  return (
    <div>

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