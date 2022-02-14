/* eslint-disable no-undef */
const url = `http://localhost:${process.env.PORT}/api/employees`;

const getAllEmployees = async () => {

  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    mode: 'cors'
  });

  if (response.status === 200) {
    let data = await response.json();
    return data;

  } else {
    let data = await response.json();
    throw new Error(data.error);
  }

};

const createNewEmployee = async (newEmployee) => {

  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(newEmployee),
    mode: 'cors'
  });

  if (response.status === 201) {
    let data = await response.json();
    return data;

  } else {
    let data = await response.json();
    throw new Error(data.error);
  }

};

export default { getAllEmployees, createNewEmployee };