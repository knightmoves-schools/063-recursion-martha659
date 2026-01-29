let count = 0;

function markAsDone(todos) {
todos[count] = "done - " + todos[count];
count++;
    if(count < todos.length){
    return markAsDone(todos);
    }else{
        return todos;
    }
}




