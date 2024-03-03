const taskInput= document.getElementById("taskInput") as HTMLInputElement
const taskSubmit= document.getElementById("taskSubmit") as HTMLButtonElement
const taskList = document.getElementById("taskList") as HTMLOListElement
let container = document.getElementById("taskInputSection") as HTMLDivElement
let taskArray: string[] = []

taskSubmit.addEventListener('click', ()=>{

    if (taskInput.value.length > 0) {
        taskArray.push(taskInput.value)
        taskInput.value =''
        displayTask()
    }
})
const displayTask = () =>{
    let HtmlList:string ='';
    for (let i = 0; i < taskArray.length; i++) {
        HtmlList+=  `<li> <br>${taskArray[i]} <br> <button onclick ='Edit()'> Edit </button> <button  onclick ='deleteTask(${i})'> Completed </button></li>`
        
    }
    taskList.innerHTML =HtmlList
}

const deleteTask = (a:number): void =>{
    taskArray.splice(a,1);
    displayTask()
}

const Edit = (a:number): void =>{
    let editPromt = window.prompt("Replace With a New Task ");
    if (editPromt!== '') {
        taskArray.splice(a,1,`${editPromt}`)
        displayTask()
    }
}
