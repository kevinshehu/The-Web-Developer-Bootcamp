// list
const ToDoList = [];

let input = prompt("What would you like to do? ");

while (input.toLowerCase() !== "quit") {
    if (input === "new") {
        // take input
        let NewToDo = prompt("Add: ");

        // push it to the list
        ToDoList.push(NewToDo);
    }

    else if (input === "list") {
        console.log("***************");

        // print the list
        for (let i = 0; i < ToDoList.length; i++) {
            console.log(`${i}: ${ToDoList[i]}`);
        }

        console.log("***************");
    }

    else if (input === "delete") {
        let index = parseInt(prompt("Index: "));

        // dont allow invalid index input
        while (!ToDoList[index]) {
            index = prompt("Enter valid index: ");
        }

        // delete the element
        const deletedToDo = ToDoList.splice(index, 1);

        console.log(`Deleted: ${deletedToDo}`);
    }

    else {
        input = prompt("Enter a valid option: ");
    }

    // take input
    input = prompt("What would you like to do? ");
}

// end
console.log("You quitted the app.");