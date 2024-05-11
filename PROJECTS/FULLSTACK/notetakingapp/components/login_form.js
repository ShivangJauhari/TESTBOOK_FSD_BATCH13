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
           `;
  }

}

customElements.define('app-login-form', LoginForm); // Path: PROJECTS/FULLSTACK/notetakingapp/components/signup_form.js

