let count = 0;

function markAsDone(todos) {
todos[count] = "done - " + todos[count];
count++;
    if(count < todos.length){
    return MarkasDone(todos);
    }else{
        return todos;
    }
}


