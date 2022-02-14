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
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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

  /**
   * Create new employee
   */
  const createNewEmployee = (event) => {

    event.preventDefault();

    const employeeObject = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone
    };

    employeeService
      .createNewEmployee(JSON.stringify(employeeObject)).then(returnedEmployees => {
        setEmployees(employees.concat(returnedEmployees));
      });

    setFirstname('');
    setLastname('');
    setEmail('');
    setPhone('');

  };

  return (
    <div>

      <form onSubmit={createNewEmployee} >

        <p>Firstname:</p>
        <input
          value={firstname}
          onChange={({ target }) => setFirstname(target.value)}
        />
        <p>Lastname:</p>
        <input
          value={lastname}
          onChange={({ target }) => setLastname(target.value)}
        />
        <p>Email:</p>
        <input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <p>Phone:</p>
        <input
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />

        <button type='submit' >Add</button>

      </form>

      <Employees
        employees={employees}
      />

    </div>
  );

};

export default App;