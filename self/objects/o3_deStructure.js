const course ={
  courseName : "js course" ,
  price : "999" ,
  courseInstructor : "guri"
}
// console.log(course.courseInstructor);

const {courseInstructor : instructor} = course;
                        // ^ de-structure or rename
// console.log(courseInstructor);     //guri
console.log(instructor);             //guri


