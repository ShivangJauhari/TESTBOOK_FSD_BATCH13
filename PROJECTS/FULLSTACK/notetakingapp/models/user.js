import { cwd } from 'process';
import path from 'path';
import fs from 'fs';
import Note from './note.js';

let userId = 0;

export default class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.timestamp = new Date();
        this.id = userId++;
        this.notes = [];
    }

    createUserJsonFile() {
        const userJson = {
            username: this.username,
            email: this.email,
            password: this.password, 
            timestamp: this.timestamp,
            id: this.id,
            notes: this.notes,
        }

        const userJsonFileName = `${this.username}_${this.email}.json`;
        fs.writeFileSync(path.join(cwd(), 'user_filedata', userJsonFileName), JSON.stringify(userJson));
    }

    addNoteToUser(title, description, timestamp, isCompleted) {
        const note = new Note(title, description, timestamp, isCompleted);
        this.notes.push(note);
        this.createUserJsonFile();
    }

    getAllNotesFromUser() {
        return this.notes;
    }

    getNoteFromUser(noteTitle) {
        return this.notes.find(note => note.title === noteTitle);
    }

    editNoteFromUser(noteTitle, newNoteTitle, newNoteDescription) {
        const note = this.notes.find(note => note.title === noteTitle);
        note.editTitle(newNoteTitle);
        note.editDescription(newNoteDescription);
        this.createUserJsonFile();
    }

    deleteNoteFromUser(noteTitle) {
        this.notes = this.notes.filter(note => note.title !== noteTitle);
        this.createUserJsonFile();
    }

    getUser() {
        return {
            username: this.username,
            email: this.email,
            notes: this.notes,
        }
    }
}