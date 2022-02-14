/**
 * Module dependencies
 */
import React, { useEffect, useState } from 'react';
import employeeService from './services/employee';

/**
 * Main component
 */
const App = () => {

  /**
   * Component states
   */
  const [employees, setEmployees] = useState([]);

  /**
   * Get all employees from the backend
   */
  useEffect(() => {

    employeeService
      .getAllEmployees().then(initialEmployees => {
        setEmployees(initialEmployees);
      });

  }, []);

  console.log('render', employees.length, 'employees');
  console.log(employees);

  return (
    <div>

      {employees.map(employee =>

        <div key={employee.id} >
          <h2> {employee.firstname} {employee.lastname} </h2>
          <p>Email: {employee.email} </p>
          <p>phone: {employee.phone} </p>
        </div>

      )}

    </div>
  );

};

export default App;