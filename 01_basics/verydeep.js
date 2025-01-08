// function multipieby5(num) {
//     return num*5
// }

// multipieby5.power = 2

// console.log(multipieby5(5));
// console.log(multipieby5.power);
// console.log(multipieby5.prototype);


// function name(username,score) {
//     this.username=username
//     this.score=score
// }

// createUser.prototype.increment= function(){
//     this.score++
// }
// createUser.prototype.printme=function(){
//     console.log(`price is ${this.score}`);
    
// }
   
// chai.printme()
// const chai=new createUser(chai, 25)
// const tea= createUser(tea, 250)

// First, define the createUser constructor function
function createUser(username, score) {
    this.username = username;
    this.score = score;
}

// Now, add the prototype methods to the createUser constructor
createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.printme = function() {
    console.log(`score is ${this.score}`);
}

// Now you can create instances of createUser
const chai = new createUser('chai', 25);
const tea = new createUser('tea', 250);

// Test the methods
chai.increment();
chai.printme(); // Output: score is 26

tea.increment();
tea.printme(); // Output: score is 251
