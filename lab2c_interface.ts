export interface toDoInterface{
    tasks:Array<string>;
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(tassk:string):number;
}