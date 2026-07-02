//Time 

let mytimestammp = Date.now()
// console.log(mytimestammp);

// console.log(Math.floor(Date.now()/1000))

let newdate = new Date()
console.log(newdate.getMonth());
console.log(newdate.getDate());

// '${newdate.getDate()} and the time'

newdate.toLocaleString('default', {
  weekday: "long",

})