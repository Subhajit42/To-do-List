document.addEventListener("submit", ()=>{
    event.preventDefault();
    let array = document.querySelector("#tasksOut");
    // console.log(array);

    let entry = document.getElementById("tasksInp").value;
    // console.log(entry);

    var element = document.createElement("li");
    element.setAttribute("value", `${entry}`);

    element.innerHTML = 
    `<div class="ulItem">
        <p>${entry}</p>
       
            <img src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/close-512.png" style="height:10px" alt="close" onclick="deleteTask()">    
        
    </div>`;



    array.appendChild(element);
    //Clearing input box
    document.getElementById("tasksInp").value = "";
    
    return false;
})


function deleteTask(){
    let element = event.target.parentElement.parentElement;
    //button,div,li
    element.remove();
}