const tinderUser = new Object()

console.log(tinderUser) // const tinderUser = {} will same 

tinderUser.id = "123hh"
tinderUser.name = "ahdsh"
tinderUser.isLoggesIn = false

console.log(tinderUser);

const regularUser = {
    email: "same@gmail.com",
    fullname : {
        userfullname: {
        firstname: "Lalit",
        lastname: "thakur"
    }
}
}
console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}

const obj3 = Object.assign(obj1, obj2)
console.log(obj3);