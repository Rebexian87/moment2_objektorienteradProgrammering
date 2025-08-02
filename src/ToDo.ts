import { IToDo } from './IToDo';

export class ToDo implements IToDo {
    task: string;
    completed: boolean;
    priority: string;


    constructor(task: string,  priority: string,) {
        this.task = task;
        this.completed = false;
        this.priority = priority;
        
    }


}