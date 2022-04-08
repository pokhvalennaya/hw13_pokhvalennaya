fetch("http://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((user) => user.find((item) => item.company.name === "Johns Group"))
  .then((data) => console.log("data", data))
  .catch((error) => console.error(error));
