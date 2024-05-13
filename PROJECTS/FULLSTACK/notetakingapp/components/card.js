class Card extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
            <style>
                .card {
                    display: flex;
                    flex-direction: column;
                    background-color: #c9c9c9;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.712);
                    margin: 10px;
                    padding: 20px;
                    width: 300px;
                    
                }
                .card h3 {
                    font-size: 24px;
                    margin: 0;
                    text-align: center;
                }
                .card h4 {
                    color: #333;
                    font-size: 16px;
                    margin: 0;
                }
                .card p {
                    font-size: 16px;
                    margin: 10px 0 0 0;
                }
                .card button {
                    background-color: #333;
                    border: none;
                    border-radius: 5px;
                    color: white;
                    cursor: pointer;
                    font-size: 16px;
                    margin-top: 10px;
                    padding: 10px;
                    width: 100%;
                }
                .card button:hover {
                    background-color: #555;
                }

                .card input[type="checkbox"] {
                    position: absolute;
                    floar: left;
                }

                #note_number {
                    float: right;
                }
                #check{
                    float: left;
                }
                #date{
                    text-align: center;
                }

                .checked{
                    background-color: rgba(91, 157, 91, 0.6);
                }

    
            </style>
            <div class="card">
                
                <input type="checkbox" id="check">
                <h4 id="date">Date: <span id="note_number">Note No.-:1</span></h4>
                
                <h3 id="title">Title</h3>
                <p id="description">Description: this is a demo discription</p>
                
                
                <button id="edit">Edit</button>
                <button id="delete">Delete</button>
            </div>
        `;

    // Add event listeners
    this.querySelector('#edit').addEventListener('click', async () => {
      // Call function from User class
      await User.editNote();
    });

    this.querySelector('#delete').addEventListener('click', async () => {
      // Call function from User class
      await User.deleteNote();
    });

    //toggle checked class if checkbox is checked
    this.querySelector('#check').addEventListener('click', async () => {
      if (this.querySelector('#check').checked) {
        this.querySelector('.card').classList.add('checked');
      } else {
        this.querySelector('.card').classList.remove('checked');
      }
    });
  }

}

customElements.define('app-card', Card); // Path: PROJECTS/FULLSTACK/notetakingapp/components/footer.js