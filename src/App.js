/**
 * Module dependencies
 */
import React, { useEffect, useState } from 'react';
import employeeService from './services/employee';
import Employees from './components/employees/employees';

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

      <Employees
        employees={employees}
      />

    </div>
  );

};

export default App;