class SignupForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            /* ... styles ... */
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
            <button id="signup">Sign Up</button>
        </form>
        `;

        this.querySelector('#signup').addEventListener('click', async (e) => {
            e.preventDefault();
            const username = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;

            try {
                const response = await fetch('/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password
                    })
                });

                const data = await response.json();
                console.log(data);

                if (data.success) {
                    console.log('User created successfully');
                    alert('User created successfully');
                    // Redirect to login.html
                    window.location.href = '/login';
                } else {
                    console.log('User already exists');
                    alert('User already exists');
                    // Redirect to signup.html
                    window.location.href = '/signup';
                }
            } catch (error) {
                console.error('Error:', error);
            }
        });
    }
}

customElements.define('app-signup-form', SignupForm);