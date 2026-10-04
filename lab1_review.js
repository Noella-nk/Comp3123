/*
Purpose: Review JS concepts
Prototype vs Classes
Regular functions, anonymous functions, Arrow functions
Callback functions
MERN: N stands for Node.js,
*/

// Var is global vs let is local

var globalVariable = 100;
let localVariable = 200;

function functionName() {
    let varInFunc = "local"
 }

// console.log(varInFunc); // WILL FAIL

//Prototype - one time use object from a prototype
//Anonymous function is used to define methods in a prototype object. Void is a datatype that is returned when
//there is no return value from a funct
const oneTimeUseObj = {
    prop1: "Noela",
    prop2: "comp3123",
    method1: function(param1) {
        console.log(param1);
    }
}

// const

console.log(oneTimeUseObj);
console.log(oneTimeUseObj.prop1);
console.log(oneTimeUseObj.prop2);
oneTimeUseObj.method1("Pizza");

//Prototype - using a constructor
function Student(student_name_p, course_p, lunch_p) {
    this.student_name = student_name_p;
    this.course = course_p;
    this.lunch = lunch_p;
    this.method1 = function(param1) {
        return
}         
}
    
const morning_student = new Student("Noela", "Comp3123", "noodles");
console.log(morning_student);
console.log(morning_student.student_name);
console.log(morning_student.course);
morning_student.method1(morning_student.lunch);

//Classes - always have constructors
class Prof {
    constructor (prof_name_p){
        this.prof_name = prof_name_p
    }
    method1(lunch){
        console
    }
}

const morning_prof = new Prof("Noela");
console.log(morning_prof.prof_name);
morning_prof.method1("burger");

// Optional Homework:
