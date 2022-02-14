const url = `http://localhost:${process.env.PORT}/api/employees`;

const getAllEmployees = async () => {

  // eslint-disable-next-line no-undef
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
  }

};

export default { getAllEmployees };