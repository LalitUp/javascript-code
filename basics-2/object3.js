// destructure

const course = {
    coursename: "js in hindi",
    price: "899",
    courseInstructor: "thakur"
}

// course.courseInstructor

const {courseInstructor: inst} = course
console.log(inst); // - destructure

// react

const navbar = ({company }) => {

}

navbar(company = " Thakurs ") 

// APIs

// { } this is json both are assigned as string in json 

{
    "name": "thakur",
    "coursename": "js in hindi",
    "price": "free"
}
