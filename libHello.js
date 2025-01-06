//libHello.js
const person = {
    name: 'Kanticha',
    weigh : 47
};

function sayHello() {
    console.log("Hello Krubb!!")
}

function cube(x) {
    return x*x*x;
}
const add = (a, b) => a+b;

const status = true;

module.exports= {person, sayHello , cube, add, status};


