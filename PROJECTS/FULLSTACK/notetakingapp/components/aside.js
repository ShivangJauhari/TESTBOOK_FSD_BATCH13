class Aside extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <style>
            aside {
                display: flex;
                flex-direction: column;
                top: 50%;
                left: 0;
                transform: translate(-10%, -50%);
                position: absolute;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 5px;
                width: 300px;
                margin: 0 auto;
                background-color: #f9f9f9;
            }
            button {
                width: 100%;
                padding: 10px;
                margin: 10px;
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
        <aside>
            <button id="newNote">New Note</button>
            <button id="getAllNote">Get All Notes</button>
            <button id="getNoteWithTitle">Get Note with Title</button>
            <button id="deleteAllNotes">Delete All Notes</button>
        </aside>
        `;
            // Add event listeners
        this.querySelector('#newNote').addEventListener('click', async () => {
            // Call function from User class
            await User.newNote();
        });

        this.querySelector('#getAllNote').addEventListener('click', async () => {
            // Call function from User class
            await User.getAllNotes();
        });

        this.querySelector('#getNoteWithTitle').addEventListener('click', async () => {
            // Call function from User class
            await User.getNoteWithTitle();
        });

        this.querySelector('#deleteAllNotes').addEventListener('click', async () => {
            // Call function from User class
            await User.deleteAllNotes();
        });
        
    }
}

customElements.define('app-aside', Aside);