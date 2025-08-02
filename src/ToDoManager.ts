import { ToDo } from "./ToDo";
import { LocalStorageUtil } from "./LocalStorageUtil";



export class ToDoManager {
    private toDos: ToDo[] = [];  //Array som håller alla kontakter


    //Kontruktor skapar objekt av klassen ContactManager och fyller arrayen med kontakter från LocalStorage
    constructor() {
        this.toDos = LocalStorageUtil.loadFromLocalStorage();
    }


    
    public addToDo(toDo: ToDo): void {
        this.toDos.push(toDo);
        LocalStorageUtil.saveToLocalStorage(this.toDos);

    }


    public getToDo(): ToDo[] { //retunerar att göra  till main.ts
        return this.toDos;
    }

    


}