fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
})
  .then(response =>
    response.json()
  )
  .then(result => {
    console.log(result);
  });
