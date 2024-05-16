import { cwd } from 'process';
import path from 'path';
import fs from 'fs';
import Note from './note.js';



export default class User {

    static userId = 0;

    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.timestamp = new Date();
        this.id = User.userId++;
        this.notes = [];
        this.filename = path.join(cwd(), 'user_filedata', `${this.username}_${this.email}.json`);
        this.saveToFile();

    }

   saveToFile(cb) {
        let user = {
            username: this.username,
            email: this.email,
            password: this.password,
            timestamp: this.timestamp,
            id: this.id,
            notes: this.notes,
            filename: this.filename
        
        };
        fs.writeFile(this.filename, JSON.stringify(this), (err) => {
            if (err) {
                cb(err);
            } else {
                cb(null);
            }
        });
    }



    addNote() {
        const note = new Note();
        this.notes.push(note);
        fs.writeFileSync(this.filename, JSON.stringify(this.notes));
    }

    getAllNotes() {
        this.notes = JSON.parse(fs.readFileSync(this.filename));
        return this.notes;
    }

    getNoteWithTitle(title) {
        this.getAllNotes();
        return this.notes.find(note => note.title === title);
    }

    sortNotesByTitle() {
        this.getAllNotes();
        this.notes.sort((a, b) => a.title.localeCompare(b.title));
        fs.writeFileSync(this.filename, JSON.stringify(this.notes));
        return this.notes;
    }

    sortNotesByDate() {
        this.getAllNotes();
        this.notes.sort((a, b) => new Date(a.date) - new Date(b.date));
        fs.writeFileSync(this.filename, JSON.stringify(this.notes));
        return this.notes;
    }

    deleteAllNotes() {
        this.notes = [];
        fs.writeFileSync(this.filename, JSON.stringify(this.notes));
    }
}