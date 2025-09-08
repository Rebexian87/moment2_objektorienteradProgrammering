import { ToDo } from "./ToDo"; //importerar ToDo klass
import { ToDoManager } from "./ToDoManager";  //importerar ToDoManager klass

const toDoManager = new ToDoManager(); //Skapar ett objekt av ToDoManager

//Windows onload??

document.addEventListener('DOMContentLoaded', () => { //Loadas vid start
    const form = document.getElementById('form')! as HTMLFormElement; //FormElement från HTML
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Förhindrar att formuläret skickas traditionellt
         addToDo(); //Anropar funktion addToDo
        renderToDos(); //Anropar funktion  renderToDos()
    });
});


function addToDo(): boolean {
    const taskInput = document.getElementById('task') as HTMLInputElement; //InputElement från HTML
    const priorityInput = document.getElementById('priority') as HTMLInputElement;  //InputElement från HTML
    let errorEl=document.getElementById('error')as HTMLParagraphElement  //ParagrafElement från HTML
    errorEl.innerText=''

    //Värden från inputrad
    const task = taskInput.value; 
    const priority = Number(priorityInput.value); //Number används så att man kan använda siffror i ifsatsen. 

    //Detta händer om det finns en uppgift och prioriteringen är 1,2 eller 3
    if (task && priority == 1||priority == 2||priority ==3) {
        const newToDo = new ToDo(task, priority) //Skapar new ToDo
        toDoManager.addToDo(newToDo); //Skickar in newToDo till addToDo metoden i ToDoManager
        //rensar inputfälten
        taskInput.value = ''; 
        priorityInput.value = '';

        return true //returnerar sant
      

    } else {
        errorEl.innerText= 'Prioritet måste vara 1, 2 eller 3' //Felmeddelande
        return false //returnerar falskt
      
    }

//   renderToDos();
}




function renderToDos(): void {
    console.log(toDoManager); // Visar ToDoManager-instansen

    const toDos = toDoManager.getToDo(); //Hämtar arrayen med att göra från ToDoManager
    
    let pEl=document.getElementById("p") as HTMLParagraphElement //ParagrafElement
    pEl.textContent=("Det är så här många saker att göra i min lista " + toDos.length) //Skriver ut antalet uppgifter på skärmen 
    const toDoList = document.getElementById('toDo-list') as HTMLUListElement;//ListElement från HTML
    const toDoList2 = document.getElementById('toDo-list2') as HTMLUListElement;//ListElement från HTML
    const toDoList3 = document.getElementById('toDo-list3') as HTMLUListElement;//ListElement från HTML


    if (toDoList) {
            // Rensar listan
            toDoList.innerHTML = ''; 
            toDoList2.innerHTML = ''; 
            toDoList3.innerHTML = '';

            //Loopar igenom att göra för att skriva ut på skärmen
        toDos.forEach((toDo) => {
            
             if (toDo.priority == 1  ) { //Om prioritet är 1 händer nedan. 

                    const li = document.createElement('li');  //skapar element li
                    const button=document.createElement('button')  //skapar element button
                    button.textContent='Klar'//text på knapp

                         
                     button.addEventListener('click', () =>   //Eventlyssnare som lyssnar vid klick

                        {const toDos = toDoManager.getToDo();  //Hämtar ToDo från Localstorage                                            
                         toDo.completed=true //Gör om completed från false till true (från inte klar till klar)
                         
                        li.style.textDecoration = toDo.completed ? 'line-through' : 'none'; //Om det är klart så blir uppgiften överstruken
                        button.textContent= toDo.completed ? "Är klar" : "Klar?";  //text på knapp när uppgift är klar vs ej klar
                         localStorage.setItem("toDos", JSON.stringify(toDos))   //Sparar till localstorage att uppgiften är klar            
                        } )         
                        //Skriver ut uppgiften      
                        li.innerHTML = `<strong>${toDo.task}</strong><br>           
                        prioritet: ${toDo.priority}<br>  `;
                        
                    
                        li.style.textDecoration = toDo.completed ? 'line-through' : 'none';
                        button.textContent= toDo.completed ? "Är klar" : "Klar?";  //text på knapp när uppgift är klar vs ej klar
                    
             

               //li.style.textDecoration = toDo.completed ? 'line-through' : 'none';
                    li.appendChild(button)    
                    toDoList.appendChild(li);  
                    
                    
                 
        
              


   

          }

                      if (  toDo.priority == 2 ) { //Om prioritet är 2 händer nedan. 
                        const li = document.createElement('li');  //skapar element li
                        const button=document.createElement('button') //skapar element button
                        //button.textContent='Klar' //text på knapp
                         
                        button.addEventListener('click', () =>  //Eventlyssnare som lyssnar vid klick           
                            {const toDos = toDoManager.getToDo(); //Hämtar ToDo från Localstorage                                                    
                            toDo.completed=true //Gör om completed från false till true (från inte klar till klar) 
                         
                            li.style.textDecoration = toDo.completed ? 'line-through' : 'none'; //Om det är klart så blir uppgiften överstruken
                            button.textContent= toDo.completed ? "Är klar" : "Klar?";  //text på knapp när uppgift är klar vs ej klar
                            localStorage.setItem("toDos", JSON.stringify(toDos))    //Sparar till localstorage att uppgiften är klar                       
                            })   

                           //Skriver ut uppgiften        
                            li.innerHTML = `<strong>${toDo.task}</strong><br>           
                            prioritet: ${toDo.priority}<br>  `;
          
             

                        li.style.textDecoration = toDo.completed ? 'line-through' : 'none';
                        button.textContent= toDo.completed ? "Är klar" : "Klar?";  //text på knapp när uppgift är klar vs ej klar
                            li.appendChild(button)
                            toDoList2.appendChild(li); }                 
       
              


   

           

                    if (  toDo.priority == 3 ) {//Om prioritet är 3 händer nedan. 
                            const li = document.createElement('li'); //skapar element li
                            const button=document.createElement('button')//skapar element button
                            button.textContent='Klar'//text på knapp
                         
                            button.addEventListener('click', () =>     //Eventlyssnare som lyssnar vid klick              
                                {const toDos = toDoManager.getToDo();       //Hämtar ToDo från Localstorage                                               
                                toDo.completed=true  //Gör om completed från false till true (från inte klar till klar) 
                         
                                li.style.textDecoration = toDo.completed ? 'line-through' : 'none'; //Om det är klart så blir uppgiften överstruken
                                button.textContent= toDo.completed ? "Är klar" : "Klar?"; //text på knapp när uppgift är klar vs ej klar
                                localStorage.setItem("toDos", JSON.stringify(toDos))      //Sparar till localstorage att uppgiften är klar                   
                                })

                            //Skriver ut uppgiften          
                            li.innerHTML = `<strong>${toDo.task}</strong><br>           
                            prioritet: ${toDo.priority}<br>  `;
          
             

              li.style.textDecoration = toDo.completed ? 'line-through' : 'none'; //Om det uppgiften inte är klar så är den inte överstruken 
            button.textContent= toDo.completed ? "Är klar" : "Klar?"; //text på knapp när uppgift är klar vs ej klar
                                li.appendChild(button)
                              toDoList3.appendChild(li); }                
   

                })
            
            }}

               

                renderToDos()

               