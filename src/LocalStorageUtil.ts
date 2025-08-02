import { ToDo } from './ToDo';
export class LocalStorageUtil {

    static saveToLocalStorage(toDos: ToDo[]) {
        localStorage.setItem('toDos', JSON.stringify(toDos)); // Sparar hela att göra-arrayen till localStorage
    }

    static loadFromLocalStorage(): ToDo[] {
        const toDosStr = localStorage.getItem('toDos');
        if (toDosStr) {
 
            const rawData = JSON.parse(toDosStr);
            return rawData.map((c: { task: string; completed: false; priority: string }) =>
                new ToDo(c.task, c.priority));

        } else {
            return []; // Om inga att göra finns lagrade, returnera en tom array
        }
    }
}
