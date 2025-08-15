import { ToDo } from "./ToDo";
import { ToDoManager } from "./ToDoManager";  //importerar  ToDoManager klassen

const toDoManager = new ToDoManager(); //Skapar en instans av ToDoManager


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
    const priorityInput = document.getElementById('priority') as HTMLInputElement;

    const task = taskInput.value;
    const priority = priorityInput.value;

    if (task && priority == '1'||priority == '2'||priority == '3') {
        const newToDo = new ToDo(task, priority)
        toDoManager.addToDo(newToDo); //Skickar in newToDo till addToDo metoden i ToDoManager
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
                   const button=document.createElement('button')
                    button.textContent='Klar'
                         
                     button.addEventListener('click', () =>             
                        {const toDos = toDoManager.getToDo();                                                  
                         toDo.completed=true 
                         
                         li.style.textDecoration = toDo.completed ? 'line-through' : 'none';
                         localStorage.setItem("toDos", JSON.stringify(toDos))                      
                        } )               
                        li.innerHTML = `<strong>${toDo.task}</strong><br>           
                        prioritet: ${toDo.priority}<br>
            `;
             

              li.style.textDecoration = toDo.completed ? 'line-through' : 'none';
                    li.appendChild(button)

                    
        toDoList.appendChild(li);
              


   

            toDoList.appendChild(li); }
                })}}

               

                renderToDos()

               