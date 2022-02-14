/**
 * Module dependencies
 */
import React, { useEffect, useState } from 'react';
import employeeService from './services/employee';
import Employees from './components/employees/employees';
import Form from './components/form/form';

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
  const [errorMessage, setErrorMessage] = useState('');
  const [deleted, setDeleted] = useState(false);

  /**
   * Get all employees from the backend
   */
  useEffect(() => {

    employeeService
      .getAllEmployees()
      .then(initialEmployees => {
        setEmployees(initialEmployees);
      })
      .catch(error => {
        setErrorMessage(error.message);
        setTimeout(() => {
          setErrorMessage('');
        }, 5000);
      });

  }, [deleted]);

  /**
   * Create new employee
   */
  const createNewEmployee = async (event) => {

    event.preventDefault();

    const employeeObject = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone
    };

    await employeeService
      .createNewEmployee(employeeObject)
      .then(returnedEmployees => {
        setEmployees(employees.concat(returnedEmployees));

      })
      .catch(error => {
        setErrorMessage(error.message);
        setTimeout(() => {
          setErrorMessage('');
        }, 5000);
      });

    setFirstname('');
    setLastname('');
    setEmail('');
    setPhone('');

  };

  /**
   * Delete employee
   */
  const deleteEmployee = (id) => {
    employeeService.deleteEmployee(id);
    setDeleted(!deleted);
  };

  /**
   * Update employee
   */
  const updateEmployee = async (id, newObject) => {

    await employeeService
      .updateEmployee(id, newObject)
      .then(returnedEmployees => {
        setEmployees(employees.map(employee => employee.id !== id ? employee : returnedEmployees));
      })
      .catch(error => {
        setErrorMessage(error.message);
        setTimeout(() => {
          setErrorMessage('');
        }, 5000);
      });

  };

  return (
    <div>
      <h3> {errorMessage} </h3>

      <Form
        createNewEmployee={createNewEmployee}
        firstname={firstname}
        lastname={lastname}
        email={email}
        phone={phone}
        setFirstname={setFirstname}
        setLastname={setLastname}
        setEmail={setEmail}
        setPhone={setPhone}
      />

      <Employees
        employees={employees}
        deleteEmployee={deleteEmployee}
        updateEmployee={updateEmployee}
      />

    </div>
  );

};

export default App;