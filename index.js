// Add your code here
document.getElementById('userDataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

})
function submitData(name, email) {
   const userData = {
     name: name,
     email: email
   };
  
   const config = {
       // fetch(`http://localhost:3000/users`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userData)
    }
  
      return fetch('http://localhost:3000/users', config)
      .then(response => response.json())
      .then(data => {
        const id = data.id;
        const idElement = document.createElement('p');
        idElement.textContent = id;
        document.body.appendChild(idElement);
      })
      .catch(error => {
        const errorElement = document.createElement('p');
        errorElement.textContent = error.message;
        document.body.appendChild(errorElement);
      });
 }
  //submitData()
