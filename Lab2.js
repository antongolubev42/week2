var tasks = [];
//adding to array
function addTask(task) {
    tasks.push(task);
    //to get the length of the array
    return tasks.length;
}
function listAllTasks() {
    //loop thru every item 
    tasks.forEach(function (task) {
        console.log(task);
    });
}
//delete a string
function deleteTask(task) {
    var index = tasks.indexOf(task, 0);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("item " + task + " has been deleted");
    }
    else {
        console.log("item not found: " + task);
    }
    return tasks.length;
}
addTask("item1");
addTask("item2");
addTask("item3");
listAllTasks();
deleteTask("item2");
listAllTasks();
