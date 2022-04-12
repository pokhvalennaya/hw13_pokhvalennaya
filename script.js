fetch("http://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((user) =>
    console.log(user.find(({ company: { name } }) => name === "Johns Group"))
  )
  .catch((error) => console.error(error));
