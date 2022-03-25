

function addTask(){
    //console.log("abc"+valueOfInput);
    var newElem=$("<li></li>");
    var valueOfInput = $("#task_add").val();
    if(valueOfInput!=""){
        newElem.text(valueOfInput);
        $("#menu").append(newElem);
    }else{
        alert("please add a valid task");
    }
    
}

function searchTask(){
    $toBeSought = $("#task_srch").val();
    var array = $("#menu").children()
    for (var i = 0; i < array.length; i++) {
        if ($(array[i]).text() === $toBeSought) {
            alert('it exists')
            console.log('it exists')
            return;
        }
    }
    alert('it doesnt exist')
    console.log('it doesnt exist')   
}

function deleteTask(){
    $toBeDeleted = $("#task_del").val();
    var array = $("#menu").children()
    for (var i = 0; i < array.length; i++) {
        if ($(array[i]).text() === $toBeDeleted) {
            $(array[i]).remove();
            alert("element deleted")
            console.log('element deleted')
            return;
        }
    }
    alert('the element you were trying to delete does not exist') 
    console.log('the element you were trying to delete does not exist')   
}

// to work on
function updateTask(){
    $toBeUpdated = $("#task_update").val();
    var array = $("#menu").children()
    for (var i = 0; i < array.length; i++) {
        if ($(array[i]).text() === $toBeUpdated) {
            var newValue=prompt("saisir la nouvelle valeur");
            $(array[i]).text(newValue);
            alert("element updated from "+$toBeUpdated +" to "+ newValue)
            return 
        }
    }
    alert('the element you were trying to delete does not exist')
    console.log('the element you were trying to delete does not exist')   
}





function searchTaskByName(taskName){
    $toBeSought = $("#task_srch").val();
    var array = $("#menu").children()
    for (var i = 0; i < array.length; i++) {
        if ($(array[i]).text() === taskName) {
            return true;
        }
    }
    return false;   
}

function deleteTaskByName(taskName){
    $toBeDeleted = $("#task_del").val();
    var array = $("#menu").children()
    for (var i = 0; i < array.length; i++) {
        if ($(array[i]).text() === taskName) {
            $(array[i]).remove();
            return;
        }
    } 
}
function done(){
    var newElem=$("<li></li>");
    var valueOfInput = $("#task_add").val();
    if(valueOfInput!="" && searchTaskByName(valueOfInput)){
        newElem.text(valueOfInput);
        $("#menuOfDone").append(newElem);
        deleteTaskByName(valueOfInput);
    }
}