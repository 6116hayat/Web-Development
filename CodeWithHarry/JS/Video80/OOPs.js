
// OOP is a way to organise code by creating objects that represent real-world things. 

// 1. Prototype : It is a blueprint from which objects inherit properties and methods. Every Object has hidden [[Prototype]] that links to another object

// Example 1
// function person(name) {
//     this.name = name;
// }


// person.prototype.greet = function () {
//     console.log(`Hello, my name is ${this.name}`);
// }

// const john = new person(`John`);
// john.greet(); 


// Example 2
// let human = {
//     eats: true,
//     sleep: true
// };

// let student = {
//     studies: true,
//     procastinates: true
// };

// __proto__ : keyword inherits the objects into another
// student.__proto__ = human; // sets student.[[Prototype]] = human

// 2. Classes and Objects: Classes are templates to create objects. Objects are instances of classes.

// 3. Constructor: It is a special method in classes used to intialize objects

// Example 1
// class Person{
//     constructor(name){
//         this.name = name;
//     }

//     greet(){
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// const hayat = new Person(`Hayat`);
// hayat.greet(); 

// Example 2
// class countries{
//     constructor(name){
//         console.log("Object is created...");
//         this.name = name;
//     }

//     hasArmy(){
//         console.log(`Yes ${this.name} has Army`);
//     }

//     hasWealth(){
//         console.log(`Yes ${this.name} has Wealth`);
//     }
// }

// let country1 = new countries('India');
// console.log(country1);
// country1.hasArmy();
// country1.hasWealth();

// 4. Class Inheritance: Inheritance allows one class to inherit properties and methods from another

// 5. Extends Keyword: The extends keyword is used to create a class that inherits from another

// 6. Method Over-riding: A subclass can redefine a method inherited from its parent class

// Example 1
// class Cars{
//     constructor(name){
//         this.name = name;
//     }

//     hasWheels(){
//         console.log(`This car has 4 wheels, Dummy`);
//     }

//     engineRev(){
//         console.log(`Grnn Grnn...`);
//     }
// }

// class Porsche extends Cars{
//     engineRev(){
//         console.log(`Vroom Vroom`);
//     }
// }

// Create insatnce of Cars
// const car1 = new Cars(`GWagon`);
// console.log("Car 1 = ",car1.name);
// car1.hasWheels();
// car1.engineRev();

// console.log("\n");

// const car2 = new Porsche(`Porsche 911 Gt3`);
// console.log("Car 1 = ",car2.name);
// car2.hasWheels(); 
// car2.engineRev(); 


// 7. Super Keyword: it refers to the parent class. It's used to call a parent class method or constructor

// 8. Overrding Constructor: A subclass can define its own constructor, but it must call the parent's constructor using super()

// Example 1
// class Dogs{
//     constructor(name){
//         this.name = name;
//     }

//     bark(){
//         console.log("Woof Woof");
//     }
// }

// class Bulldog extends Dogs{
//     constructor(name){
//         super(name)
//     }

//     bark(){
//         super.bark();
//         // console.log("Bow Bow");
//     }
// }

// const dog1 = new Dogs('HUP');
// console.log("Dog1 Name",dog1.name);
// dog1.bark();

// const dog2 = new Bulldog('BULLET');
// console.log("Dog1 Name",dog2.name);
// dog2.bark();


