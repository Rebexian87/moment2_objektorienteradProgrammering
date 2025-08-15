import { IToDo } from './IToDo';

//Klass för Att göra som implemmenterar IToDo
export class ToDo implements IToDo {
    task: string;
    completed: boolean;
    priority: string;

        //Konstruktor för klassen
    constructor(task: string,  priority: string,) {
        this.task = task;
        this.completed = false;
        this.priority = priority;
        
    }


}