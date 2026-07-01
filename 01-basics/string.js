const name = "Mirza"
const repocunt = 2


console.log(name + repocunt);
const gamename = new String('Pubg-Mobile')
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('u'));

const newString = gamename.substring(0,2)
console.log(newString);


const anotherstring = gamename.slice(-3,3)
console.log(anotherstring);

const Stringone ="      Mirza    "
console.log(Stringone)
console.log(Stringone.trim())

const url="https://localhost/project/call.php"
url.replace('call','index')
console.log(url.replace('call','index'));


url.includes('localhost')
console.log(url.includes('wasif'));


console.log(gamename.split('-'));

