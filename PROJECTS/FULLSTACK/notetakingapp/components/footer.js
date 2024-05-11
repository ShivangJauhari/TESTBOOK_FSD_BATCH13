class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <style>
                footer {
                    background-color: #333;
                    color: white;
                    text-align: center;
                    padding: 10px;
                    position: fixed;
                    bottom: 0;
                    width: 100%;
                }
                p {
                    margin: 0;
                    text-align: center;

                }
                nav ul {
                    display: flex;
                    list-style: none;
                    align-items: center;
                    justify-content: center;
                }
                nav ul li {
                    margin-right: 10px;
                }
                nav ul li a {
                    color: white;
                    text-decoration: none;
                    transition: all 0.3s;
                }
                nav ul li a:hover {
                    color: #ccc;
                    text-decoration: underline;
                }
            </style>
            <footer>
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/signup">Sign Up</a></li>
                </ul>
            </nav>
                <p>&copy; 2024 Note Demon: Shivang Jauhari</p>
            </footer>
        `;
  }
}

customElements.define('app-footer', Footer);