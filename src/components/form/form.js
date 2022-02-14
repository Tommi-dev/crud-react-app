/* eslint-disable react/prop-types */
import React from 'react';

const Form = (props) => {

  return (
    <form onSubmit={props.createNewEmployee} >

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