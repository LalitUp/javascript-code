// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "lalit",
    age: 20,
    mySym: "mykey1",
    location: "India",
    email: "thakur@mcst.com",
    isLoggedIn: false,
    lastLoggedinDays: ["sunday", "saturday"]
}

console.log(JsUser.email);
console.log(JsUser.mySym);

JsUser.email = "lall@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "djbha@ndh.com"
console.log(JsUser);