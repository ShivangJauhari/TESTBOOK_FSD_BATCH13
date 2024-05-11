class DisplayNotes extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <style>
            #notes {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
            }
            .container {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
            }
          
        </style>
        <div id="notes">
            <h2>Your Notes</h2>
            <div class="container">
                <app-card></app-card>
                <app-card></app-card>
                <app-card></app-card>
                <app-card></app-card>

    
            </div>
            
        </div>
        `;
  }

}

customElements.define('app-display-notes', DisplayNotes); // Path: PROJECTS/FULLSTACK/notetakingapp/components/display_notes.js