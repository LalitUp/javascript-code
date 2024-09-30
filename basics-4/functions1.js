// functions and memory management

function sayName(){
    console.log("Lalit");
   console.log("Thakur");

}

// sayName()

// function addTwoNumbers(number1, number2) {  // inside the braces called parameters
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2) {  // inside the braces called parameters
    let result = number1 + number2;
    console.log("Lalit");
    return result

    console.log("Kumar"); // not print anything after function
}

const result = addTwoNumbers(3, 4); // these are arguments when the declaration

console.log("result:",   result);

// ------------------------------------------

function loginUserMessage(username){
    if(!username ){ // username === undefined
        console.log("please enter a username");
        return

    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("Thakur"));
console.log(loginUserMessage());