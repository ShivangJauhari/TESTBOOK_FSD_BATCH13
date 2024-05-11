// create a user class with a schema for the user model and export it as a module to be used in the app and create its json file 
// the name of the file should be username(entered by the user)_(email id of the user).json

// Path: PROJECTS/FULLSTACK/notetakingapp/models/user.js


export class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        // add timestamp to the user object
        this.timestamp = new Date();
        this.id = id = ()=> {let count = 0; return count++;};
        this.notes = []; // array of objects containing the completed or not, timestamp, and note title and note content note count
        this.createUserJsonFile();
    }

    // create a user json file
    createUserJsonFile() {
        const fs = require('fs');
        const path = require('path');
        const userJson = {
            // username should be unique
            username: this.username,
            email: this.email,
            password: this.password, 
            //add timestamp to the user json object
            timestamp: this.timestamp,
            //add id to the user json object
            id: this.id,
            notes: this.notes,
        }

        const userJsonFileName = `${this.username}_${this.email}.json`;
        fs.writeFileSync(path.join(__dirname, user_filedata ,userJsonFileName), JSON.stringify(userJson));
    }

    // add a note to the user object
    addNoteToUser(note) {
        this.notes.push(note);
        this.createUserJsonFile();
    }

    // get all notes from the user object
    getAllNotesFromUser() {
        return this.notes;
    }

    // get a note from the user object
    getNoteFromUser(noteTitle) {
        return this.notes.find(note => note.title === noteTitle);
    }

    // edit a note from the user object
    editNoteFromUser(noteTitle, newNoteTitle, newNoteDescription) {
        const note = this.notes.find(note => note.title === noteTitle);
        note.editTitle(newNoteTitle);
        note.editDescription(newNoteDescription);
               
        this.createUserJsonFile();
    }

    // delete a note from the user object
    deleteNoteFromUser(noteTitle) {
        this.notes = this.notes.filter(note => note.title !== noteTitle);
        this.createUserJsonFile();
    }

    // get the user object
    getUser() {
        return {
            username: this.username,
            email: this.email,
            notes: this.notes,
        }
    }

}




