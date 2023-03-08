export const deleteEmployee = async (id) => {
  return fetch(`http://localhost:8000/?id=${id}`, {
    method: "DELETE",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Request-Headers": "*",
    },
  }).then((response) => response.json());
};

export const fetchAllEmployees = async (setEmployees) => {
  return await fetch(`http://localhost:8000/all`, {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Request-Headers": "*",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setEmployees(data);
    });
};

export const addEmployee = async (value) => {
    return await fetch(`http://localhost:8000/`, {
      body: JSON.stringify(value),
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Headers": "*",
      },
    }).then((response) => response.json());
  };