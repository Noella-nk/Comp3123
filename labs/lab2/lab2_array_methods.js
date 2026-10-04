/*
Purpose: 

Array methos:
    forEach((currentElement) => {})
    map()
    reduce()
    filter()
    search()
 */

    
const courseList = ["COMP3123", "COMP3122", "COMP1230", "FASH1011"]
courseList.forEach((Course) => {
    console.log(Course + "!")
})

const filteredCourses = courseList.filter((currentElement) => {
    return currentElement[0] === "C"
})
console.log(filteredCourses)