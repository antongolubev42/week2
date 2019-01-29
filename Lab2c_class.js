"use strict";
exports.__esModule = true;
var toDoClass = /** @class */ (function () {
    function toDoClass() {
        this.tasks = [];
    }
    //adding to array
    toDoClass.prototype.addTask = function (task) {
        this.tasks.push(task);
        //to get the length of the array
        return this.tasks.length;
    };
    toDoClass.prototype.listAllTasks = function () {
        //loop thru every item 
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    toDoClass.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task, 0);
        if (index > -1) {
            this.tasks.splice(index, 1);
            console.log("item " + task + " has been deleted");
        }
        else {
            console.log("item not found: " + task);
        }
        return this.tasks.length;
    };
    return toDoClass;
}());
var testClass = new toDoClass();
testClass.addTask("item1");
testClass.addTask("item2");
testClass.addTask("item3");
testClass.listAllTasks();
testClass.deleteTask("task2");
testClass.listAllTasks();
