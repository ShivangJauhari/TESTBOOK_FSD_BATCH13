
// create a user class with a schema for the user model and export it as a module to be used in the class user and create its json 
// object to be used in the user class schema
// create a note class to get note properties
export class Note {
    constructor(title, description, timestamp, isCompleted) {
        this.title = title;
        this.description = description;
        this.id = id = ()=> {let count = 0; return count++;};
        this.timestamp = timestamp;
        this.isCompleted = isCompleted;
    }

    // get the note object
    getNote() {
        return {
            title: this.title,
            description: this.description,
            id: this.id,
            timestamp: this.timestamp,
            isCompleted: this.isCompleted,
        }
    }

   // get note as object
    getNoteAsObject() {
        return {
            title: this.title,
            description: this.description,
            id: this.id,
            timestamp: this.timestamp,
            isCompleted: this.isCompleted,
        }
    }

    // edit title of the note
    editTitle(newTitle) {
        this.title = newTitle;
        this.timestamp = new Date();
    }

    // edit description of the note
    editDescription(newDescription) {
        this.description = newDescription;
        this.timestamp = new Date();
    }

}