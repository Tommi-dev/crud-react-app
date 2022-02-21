/* eslint-disable react/prop-types */
import React from 'react';
import './form.css';

const Form = (props) => {

  return (
    <form className='form-container' onSubmit={props.createNewEmployee} >
      <h2>Add a new employee</h2>

      <p>Firstname:</p>
      <input
        value={props.firstname}
        onChange={({ target }) => props.setFirstname(target.value)}
        required

      />
      <p>Lastname:</p>
      <input
        value={props.lastname}
        onChange={({ target }) => props.setLastname(target.value)}
        required

      />
      <p>Email:</p>
      <input
        value={props.email}
        onChange={({ target }) => props.setEmail(target.value)}
        required

      />
      <p>Phone:</p>
      <input
        value={props.phone}
        onChange={({ target }) => props.setPhone(target.value)}
        required

      />

      <button type='submit' >Add</button>

    </form>
  );

};

export default Form;