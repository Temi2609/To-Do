"use strict";
const taskInput = document.getElementById("taskInput");
const taskSubmit = document.getElementById("taskSubmit");
const taskList = document.getElementById("taskList");
let container = document.getElementById("taskInputSection");
let taskArray = [];
taskSubmit.addEventListener('click', () => {
    if (taskInput.value.length > 0) {
        taskArray.push(taskInput.value);
        taskInput.value = '';
        displayTask();
    }
});
const displayTask = () => {
    let HtmlList = '';
    for (let i = 0; i < taskArray.length; i++) {
        HtmlList += ` <br> <li> ${taskArray[i]} <br> <br> <button onclick ='Edit()'> Edit </button> <button  onclick ='deleteTask(${i})'> Completed </button></li>`;
    }
    taskList.innerHTML = HtmlList;
};
const deleteTask = (a) => {
    taskArray.splice(a, 1);
    displayTask();
};
const Edit = (a) => {
    let editPromt = window.prompt("Replace With a New Task ");
    if (editPromt !== '') {
        taskArray.splice(a, 1, `${editPromt}`);
        displayTask();
    }
};
