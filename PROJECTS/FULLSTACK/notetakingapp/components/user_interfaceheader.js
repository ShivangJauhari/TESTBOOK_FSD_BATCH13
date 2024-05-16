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

                    h2 {
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
                    <h2></h2>
                
                <nav>
                    <ul>
                        
                        <li><a href="/logout">Logout</a></li>
                      
                    </ul>
                </nav>
            </header>
        `;


          // Add event listeners
                    // Select the 'a' element with the text 'Logout'
            const logoutLink = Array.from(document.querySelectorAll('li a')).find(a => a.textContent === 'Logout');

            // Add an event listener to the 'a' element
            logoutLink.addEventListener('click', async (event) => {
                event.preventDefault();
                // Your logout code here
                // send request to logout route
            const response = await fetch('/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            // response from server is a redirect
            if (response.redirected) {
                // clear the session storage
                sessionStorage.clear();
                window.location.href = response.url;
            }
    
        });
            

                // Use an arrow function here
            const getUsername = async () => {
                // get user name from the session storage
                const username = sessionStorage.getItem('username');
                // add username to header
                this.querySelector('h2').textContent = `Welcome ${username}`;
            }

            getUsername();
        }
    }   

customElements.define('app-userheader', Header);