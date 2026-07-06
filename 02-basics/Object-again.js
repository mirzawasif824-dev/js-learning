//singltone
//non-singletone object

// const Amazaon = new Object()
const Amazaon = {}
Amazaon.id ="ABC"
Amazaon.name = "Muneeb"
Amazaon.isloggedin = false
// console.log(Amazaon);


const reguleruser ={
    email:"some@gmail.com",
    Fullname: {
        userfullname:{
            firstname: "wasif",
            lastname: "baig"
        }
    }
}
// console.log(reguleruser.Fullname.userfullname.firstname.lastname);

const object1 = {1: "a",2:"b"}
const object2 = {3: "c",4:"d"}
const object4 = {5: "e",6:"3"}

// const obj3 = {object1,object2}
// const obj3 = Object.assign({}, object1, object2 , object4)
const obj3 = {...object1, ...object2, ...object4}
// console.log(obj3);


//when user data comes from data base 
const user =[{
    id : 1,
    email: "Some@gmail.com"
},
{
    id : 1,
    email: "Some@gmail.com"
},
{
    id : 1,
    email: "Some@gmail.com"
}
]
user[1].email
console.log(Amazaon);

console.log(Object.keys(Amazaon));

console.log(Object.values(Amazaon));
console.log(Object.entries(Amazaon));
console.log(Object.hasOwn('Amazone.name'));