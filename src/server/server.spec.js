import { addNewTask, updateTask } from './server';

(async function kicasFunc() {
    addNewTask({
        name: "KICAS task",
        id: "12346" 
    });

    updateTask({
        id: "12346",
        name: "KICAS task - UPDATED!!!!"
    });
})();