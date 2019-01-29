import{toDoInterface} from './lab2c_interface';

class toDoClass implements toDoInterface{
  tasks: Array<string>=[];

//adding to array
addTask(task:string):number{
    this.tasks.push(task);
    //to get the length of the array
    return this.tasks.length;
    }

    listAllTasks():void{
        //loop thru every item 
        this.tasks.forEach(function(task){
            console.log(task);
        })
    }

    deleteTask(task:string):number{
        let index:number=this.tasks.indexOf(task,0);
        if(index>-1){
            this.tasks.splice(index,1);
            console.log("item "+task+ " has been deleted");
        }
        else{
            console.log("item not found: "+task);
        }
        return this.tasks.length;
    }
}

let testClass=new toDoClass();
testClass.addTask("item1");
testClass.addTask("item2");
testClass.addTask("item3");
testClass.listAllTasks();
testClass.deleteTask("task2");
testClass.listAllTasks();

