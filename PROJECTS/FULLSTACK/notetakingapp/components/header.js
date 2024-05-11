class Header extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback() {         
        this.innerHTML = `
            <style>
                header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 20px;
                    background-color: #333;
                    color: white;
                }
                h1 {
                    font-size: 24px;
                }
                nav ul {
                    display: flex;
                    list-style: none;
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
            <header>
                <h1>Note Demon</h1>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

    customElements.define('app-header', Header);