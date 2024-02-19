const categoriesList=document.getElementById('categoriesList');
const notesList=document.getElementById('notesList');
const addCategorybtn=document.getElementById('addCategorybtn');
const newCategoryInput=document.getElementById('newCategoryInput');
const SearchInput=document.getElementById('SearchInput');
const noteContent=document.getElementById('noteContent');
const addNoteBtn=document.getElementById('addNoteBtn');
const editNoteBtn=document.getElementById('editNoteBtn');
const deleteNoteBtn=document.getElementById('deleteNoteBtn');

let categories=['Personal','Work'];
let notes={
    'Personal':['Buy Groceries','Call Mom'],
    'Work':['Finish Report','Prepare Presentation']
}

let currentcategory='Personal';

function displaycategories(){
    categoriesList.innerHTML='';
    categories.forEach(category=>{
        const li=document.createElement('li');
        li.textContent=category;
        li.addEventListener('click',()=>{
            currentcategory=category;
            displayNotes(category);
        })
        categoriesList.appendChild(li);

    })
}

addCategorybtn.addEventListener('click',()=>{
    const newCategory=newCategoryInput.value.trim();
    if(newCategory!==''){
        categories.push(newCategory);
        notes[newCategory]=[];
        displaycategories();
        newCategoryInput.value='';
        console.log(notes);
    }
})
function displayNotes(category){

    notesList.innerHTML='';
    notes[category].forEach(note=>{
        // console.log('note',note);
        const li=document.createElement('li');
        li.textContent=note;
        li.addEventListener('click',()=>{
            noteContent.value=note;
            noteContent.dataset.category=category;
            noteContent.dataset.note=note;


        })
        notesList.appendChild(li);
    })

}
 addNoteBtn.addEventListener('click',()=>{
    const newnote=noteContent.value.trim();
    if(currentcategory && newnote!==''){
        notes[currentcategory].push(newnote);
        displayNotes(currentcategory);
        noteContent.value='';

    }
 })
editNoteBtn.addEventListener('click',()=>{
    const category=noteContent.dataset.category;
    const oldNote=noteContent.dataset.note;
    const newnote=noteContent.value.trim();
    if(newnote!==''){
        const index=notes[category].indexOf(oldNote);
        console.log('index',index);
        if(index!==-1){
            notes[category][index]=newnote;
            displayNotes(category);
            noteContent.value='';

        }
    }
})

deleteNoteBtn.addEventListener('click',()=>{
    const category=noteContent.dataset.category;
    const oldNote=noteContent.dataset.note;
    const index=notes[category].indexOf(oldNote);
    if(index!==-1){
        notes[category].splice(index,1);
        displayNotes(category);
        noteContent.value='';
    }
})

displaycategories();