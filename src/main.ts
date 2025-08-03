import { ToDo } from "./ToDo";
import { ToDoManager } from "./ToDoManager";  //importerar ContactManager klassen

const toDoManager = new ToDoManager(); //Skapar en instans av ContactManager

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')! as HTMLFormElement;
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Förhindrar att formuläret skickas traditionellt
        addToDo();
          renderToDos();
    });
});


function addToDo(): boolean {
    const taskInput = document.getElementById('task') as HTMLInputElement; //Det här är själva elementen
    //const completedInput = document.getElementById('completed') as HTMLInputElement;
    const priorityInput = document.getElementById('priority') as HTMLInputElement;

    const task = taskInput.value;
    // const completed = false;
    const priority = priorityInput.value;

    if (task && priority == '1'||priority == '2'||priority == '3') {
        const newToDo = new ToDo(task, priority)
        toDoManager.addToDo(newToDo); //Skickar in newContact till addContact metoden i ContactManager
        taskInput.value = ''; //rensar input fälten
        priorityInput.value = '';

        return true
      

    } else {
        return false
    }

//   renderToDos();
}




function renderToDos(): void {
    console.log(toDoManager); // Ska visa ToDoManager-instansen
    const toDos = toDoManager.getToDo(); //Hämtar arrayen med kontakter från ToDoManager
    console.log("Det är så här många saker att göra i " + toDos.length);
    const toDoList = document.getElementById('toDo-list') as HTMLUListElement;//Hämtar listan från html
    // const checkbox = document.getElementById('checkbox') as HTMLElement; 

    if (toDoList) {
        toDoList.innerHTML = ''; // Rensar listan
        toDos.forEach((toDo) => {
             if (toDo.priority == "1" ||  toDo.priority == '2' || toDo.priority == '3' ) {
            const li = document.createElement('li');
                   const checkbox=document.createElement('input')
                    checkbox.type='checkbox'
                    checkbox.checked=toDo.completed
            
                     checkbox.addEventListener('change', () => {toDo.completed=checkbox.checked  

                    li.style.textDecoration = toDo.completed ? 'line-through' : 'none';
                                
                  } )
                


         
    


                    li.innerHTML = `<strong>${toDo.task}</strong><br>           
                     prioritet: ${toDo.priority}<br>
            `;
             

              li.style.textDecoration = toDo.completed ? 'line-through' : 'none';
                    li.appendChild(checkbox)

                    
        toDoList.appendChild(li);
              
         
 //<label><input type='checkbox' >status:${toDo.completed} </label><br>

   

            toDoList.appendChild(li); }
                })}}

                renderToDos()