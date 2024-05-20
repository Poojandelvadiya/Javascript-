// Stack (Primitive) , Heap (Non-primitive)

let myName = "poojan"

let anothename= myName
anothename = "Chaiaurcode"

// console.log (myName);
// console.log (anothename);

let userOne = {
    email:"poojandelvadiya27@gmail.com",
    upi: "user@ybi"
}

let userTwo = userOne

userTwo.email = "user@gmil.com"

console.log(userOne.email);
console.log(userTwo.email);

