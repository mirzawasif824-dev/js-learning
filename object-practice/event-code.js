
let eventCodes = [100, 200, 300, 400, 500];

for (let i = 0; i < eventCodes.length; i++)
{
    let code = eventCodes[i];

 
    if (code < 200) {
    console.log(code + " => Normal Event");
    }
    else if (code < 400) {
    console.log(code + " => Warning Event");
    }
     else {
    console.log(code + " => Error Event");
    }
}