// functions with objects
// shopping cart like

function calculateCartPrice(...num1){ // ... :- rest operator
    return num1

}

console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Lalit",
    price: 7250

}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject}`);
}

handleObject(user)

handleObject ({
    username : "lala"
    price: 6755

})

const newArray = [200,400,600,500]

function returnSecondValue(gettArray){
    return gettArray[1]
}

console.log(returnSecondValue([200,400,600,500]))