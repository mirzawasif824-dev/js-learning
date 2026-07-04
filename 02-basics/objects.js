// singleTon

// oject letral
const mysym = Symbol("key1")

const jsuser = {
    name : "mirza",
    age : 18,
    [mysym]: "key1",
    location : "FSD",
    email:"mirza@gmail.com",
    isloggedin:false,
    lastlogin:["Monday","friday"]
}


console.log(jsuser.location);
console.log(jsuser["location"]);
console.log(jsuser[mysym]);

// Object.freeze(jsuser)

jsuser.email ="wasif@gmail.com" 
console.log(jsuser)

jsuser.greeting = function(){
console.log("Hello js user");
}
console.log(jsuser.greeting());

jsuser.greeting2 = function(){
console.log(`Hello js user,${this.name}`);
}
console.log(jsuser.greeting2());