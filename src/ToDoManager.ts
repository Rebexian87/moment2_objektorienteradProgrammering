import { ToDo } from "./ToDo"; //Importerar ToDo
import { LocalStorageUtil } from "./LocalStorageUtil"; //Importerar LocalstorageUtil



export class ToDoManager {
    //Array som innehåller alla att göra
    private toDos: ToDo[] = [];  


    //Kontruktor skapar objekt av klassen ToDoManager och fyller arrayen med att göra- uppgifter från LocalStorage
    constructor() {
        this.toDos = LocalStorageUtil.loadFromLocalStorage();
    }


    
    public addToDo(toDo: ToDo): void { //Lägger till att göra-uppgift med hjälp av push
        this.toDos.push(toDo);
        LocalStorageUtil.saveToLocalStorage(this.toDos);

    }


    public getToDo(): ToDo[] { //retunerar att göra till main.ts
        return this.toDos;
    }

   

    



    
    


}