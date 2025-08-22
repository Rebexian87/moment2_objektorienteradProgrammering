import { IToDo } from './IToDo';

//Klass för Att göra som implemmenterar IToDo
export class ToDo implements IToDo {
    task: string;
    completed: boolean;
    priority: number;

        //Konstruktor för klassen
    constructor(task: string,  priority: number,) {
        this.task = task;
        this.completed = false;
        this.priority = priority;
        
    }


}