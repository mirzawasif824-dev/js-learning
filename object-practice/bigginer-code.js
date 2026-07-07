
let student = {
    name: "Ali",
    age: 20,
    city: "Lahore",
    course: "JavaScript",
    marks: 85
};


console.log("Student Information", student);


console.log("----------------------");


console.log("Name: " + student.name);
console.log("Age: " + student.age);
console.log("City: " + student.city);
console.log("Course: " + student.course);
console.log("Marks: " + student.marks);

console.log("----------------------");


student.age = 21;

console.log("Updated Age:" , student.age);


console.log("----------------------");

student.gender = "Male";

console.log("After Adding Gender:" , student);


console.log("----------------------");


delete student.city;

console.log("After Deleting City:", city );


console.log("----------------------");


if (student.marks >= 70) {
    console.log(student.name + " is Pass");
} else {
    console.log(student.name + " is Fail");
}

console.log("----------------------");


console.log("Object Properties:");

for (let key in student) {
    console.log(key + " : " + student[key]);
}