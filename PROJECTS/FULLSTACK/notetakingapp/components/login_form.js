class LoginForm extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <style>
            form {
                    display: block;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    position: absolute;
                    padding: 20px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    width: 300px;
                    margin: 0 auto;
                    background-color: #f9f9f9;
                }
                input {
                    width: 100%;
                    margin: 5px 0;
                    padding: 10px;
                    box-sizing: border-box;
                }
                button {
                        width: 100%;
                        padding: 10px;
                        background-color: #333;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                }
                button:hover {
                    background-color: #555;
                }
            </style>
           

           <form>
              <input type="text" placeholder="Username" required>
              <input type="email" placeholder="Email" required>
              <input type="password" placeholder="Password" required>
              <button id="login">Login</button>
           </form>
        `;
        document.querySelector('#login').addEventListener('click', async (e) => {
            e.preventDefault();
            const username = document.querySelector('input[type="text"]').value;
            const email = document.querySelector('input[type="email"]').value;
            const password = document.querySelector('input[type="password"]').value;
    
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });
    
            if (response.ok) {
                console.log('User logged in');
                alert('User logged in');
                // send the user to user_interface.html page
                window.location.href = '/user_interface';
                
                
            } else {
                console.log('Invalid username or password');
                alert('Invalid username or password');
                // Redirect to login.html
                window.location.href = '/login';
            }
          });
  }

}

customElements.define('app-login-form', LoginForm); // Path: PROJECTS/FULLSTACK/notetakingapp/components/signup_form.js

