fetch("http://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log("data", data))
  .catch((error) => console.error(error));

fetch("http://jsonplaceholder.typicode.com/users/7")
  .then((response) => response.json())
  .then((data) => console.log("data", data))
  .catch((error) => console.error(error));
