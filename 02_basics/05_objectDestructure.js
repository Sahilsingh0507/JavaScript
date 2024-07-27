const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sahil"
}



// course.courseInstructor
// the above syntax can be written like this also 
// const { courseInstructor } = course;
// console.log(courseInstructor);

// again if you feel this is a big value then 
const { courseInstructor: instructor } = course;
console.log(instructor);


// in react 
// const navbar = ({company}) => {

// }

// navbar(company = "sahil" )

// JSON = Java Script Object Notation 
// representation
// {
//     "name": "sahil",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// api can be in array also 
// [
//     {},
//     {},
//     {}
// ]