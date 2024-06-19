document.addEventListener('DOMContentLoaded', () => {
  // Sample array of destinations
  const destinations = ["Paris", "New York", "Tokyo", "London", "Berlin", "Dubai"];

  // Get the input element and results container
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');

  // Function to display search results
  function displayResults(results) {
    // Clear previous results
    searchResults.innerHTML = '';

    // Create a list of results
    const ul = document.createElement('ul');
    results.forEach(result => {
      const li = document.createElement('li');
      li.textContent = result;
      ul.appendChild(li);
    });

    // Append the list to the results container
    searchResults.appendChild(ul);
  }

  // Event listener for input change
  searchInput.addEventListener('input', () => {
    const inputText = searchInput.value.toLowerCase();
    // Filter destinations based on the input
    const filteredDestinations = destinations.filter(destination =>
      destination.toLowerCase().includes(inputText)
    );

    // Display the filtered results
    displayResults(filteredDestinations);

    // Toggle the visibility of the search results
    searchResults.style.display = filteredDestinations.length ? 'flex' : 'none'; // Use 'block' or 'flex' depending on your layout
  });
});

// create the post req for the login
document.getElementById('loginForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data);
    if (response.ok) {
      alert(data.message);
      console.log('redirecting to', data.redirectUrl);
      window.location.href = data.redirectUrl;
      

      // //get the dashboard route
      // window.location.href = '/dashboard';

      // declare the const variable for the id login and logout 
      const login = document.getElementById('login');
      const logout = document.getElementById('logout');
      // change the login to logout
      login.style.display = 'none';
      logout.style.display = 'flex';



    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred, please try again');
  }
});

// create the post req for the signup
document.getElementById('signupForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const image = document.getElementById('image').value;
  const typeOfUser = document.getElementById('typeOfUser').value;

  try {
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, phoneNumber, typeOfUser }),
    });

    const data = await response.json();

    if (response.ok) {
      alert(data.message);
      // send req to get the login route
      window.location.href = '/login';
     
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred, please try again');
  }
});