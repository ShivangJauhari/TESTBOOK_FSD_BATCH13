class SingupForm extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
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
            <button id="signup">Sign Up</button>
        </form>
        `;
        // Add event listener
        this.querySelector('#signup').addEventListener('click', async (e) => {
            e.preventDefault();
            const username = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;

            // Create the file path
            const filePath = path.join(__dirname, 'user_filedata', `${username}_${email}.json`);

            try {
                await fs.access(filePath);
                console.log('User already exists');
                alert('User already exists');
            } catch (err) {
                const fileData = {
                    username,
                    email,
                    password
                };
                await fs.writeFile(filePath, JSON.stringify(fileData));
                console.log('User created successfully');
                alert('User created successfully');
            }
        });
    }
}

customElements.define('app-signup-form', SingupForm);