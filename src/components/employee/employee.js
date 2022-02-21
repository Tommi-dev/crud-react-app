/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './employee.css';

const Employee = ({ employee, deleteEmployee, updateEmployee }) => {

  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [editEmailVisible, setEmailVisible] = useState(false);
  const [editPhoneVisible, setPhoneVisible] = useState(false);

  const hideEmailWhenVisible = { display: editEmailVisible ? 'none' : '' };
  const showEmailWhenVisible = { display: editEmailVisible ? '' : 'none' };

  const hidePhoneWhenVisible = { display: editPhoneVisible ? 'none' : '' };
  const showPhoneWhenVisible = { display: editPhoneVisible ? '' : 'none' };

  const removeEmployee = () => {
    // eslint-disable-next-line no-undef
    if (window.confirm(`Notice that ${employee.firstname} ${employee.lastname} will be removed permanently`)) {
      deleteEmployee(employee.id);
    }
  };

  const updateEmail = () => {

    const newObject = {
      email: newEmail
    };

    updateEmployee(employee.id, newObject);
    setEmailVisible(false);
    setNewEmail('');
  };

  const updatePhone = () => {

    const newObject = {
      phone: newPhone
    };

    updateEmployee(employee.id, newObject);
    setPhoneVisible(false);
    setNewPhone('');
  };

  return (
    <div className='employee-container' >

      <div className='name-container' >
        <h3> {employee.firstname} {employee.lastname} </h3>
      </div>

      <div className='email-container' >
        <p style={hideEmailWhenVisible} > {employee.email} </p>
        <button className='edit-button' style={hideEmailWhenVisible} onClick={() => setEmailVisible(true)} >Edit</button>
      </div>

      <div className='email-container-2' style={showEmailWhenVisible} >
        <input
          value={newEmail}
          onChange={({ target }) => setNewEmail(target.value)}
        />
        <button type='submit' onClick={() => updateEmail()} >Add</button>
        <button onClick={() => setEmailVisible(false)} >Cancel</button>
      </div>

      <div className='phone-container' >
        <p style={hidePhoneWhenVisible} > {employee.phone} </p>
        <button className='edit-button' style={hidePhoneWhenVisible} onClick={() => setPhoneVisible(true)} >Edit</button>
      </div>


      <div className='phone-container-2' style={showPhoneWhenVisible} >
        <input
          value={newPhone}
          onChange={({ target }) => setNewPhone(target.value)}
        />

        <button type='submit' onClick={() => updatePhone()} >Add</button>
        <button onClick={() => setPhoneVisible(false)} >Cancel</button>
      </div>

      <div>
        <button className='delete-button' onClick={() => removeEmployee()} >Delete</button>
      </div>

    </div>
  );

};

export default Employee;