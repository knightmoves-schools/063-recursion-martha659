let count = 0;

function markAsDone(todos) {
todos[count] = "done - " + todos[count];
count++;
    if(count < todos.length){
    return markasDone(todos);
    }else{
        return todos;
    }
}



