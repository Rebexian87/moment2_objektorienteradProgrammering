import { ToDo } from './ToDo';
export class LocalStorageUtil {

    //Metod som sparar till Localstorage
    static saveToLocalStorage(toDos: ToDo[]) {
        localStorage.setItem('toDos', JSON.stringify(toDos)); // Sparar hela att göra-arrayen till localStorage
    }

    //Metod som laddar data från Localstorage
    static loadFromLocalStorage(): ToDo[] {
        const toDosStr = localStorage.getItem('toDos');
        if (toDosStr) {
 
            const rawData = JSON.parse(toDosStr);
            return rawData

        } else {
            return []; // Om inga att göra finns lagrade, returnera en tom array
        }
    }
}
