const x='hello world'

console.log(x.substring(0,4).toUpperCase())

const arr= new Array(1,2,3,'hello',true);
arr.unshift('apple')
// new Array('apple',1,2,3,'hello',true)
console.log(arr)
console.log(Array.isArray(arr))
console.log(Array.isArray('arr'))
console.log(arr.indexOf('hello'))

const people={
    'name':'Mohit',
    'email':'mohit@gmail.com',
    'hobbies':['surfing','playing'],
    'address':{
        state:'Jharkhand',
        district:'ranchi'
    }
}
people.phone=09123456789
//to add something to object

console.log(people.hobbies.indexOf('surfing'))
console.log(people.address.district)
console.log(people.phone)

const peopleJson=JSON.stringify(people);
console.log(peopleJson)


// Array of objects
const todos = [
    {
      id: 1,
      text: 'Take out trash',
      isComplete: false
    },
    {
      id: 2,
      text: 'Dinner with wife',
      isComplete: false
    },
    {
      id: 3,
      text: 'Meeting with boss',
      isComplete: true
    }
  ];
//for each

  todos.forEach((todo)=>{
    console.log(todo.id)
  })

  //map

  const todoText=todos.map(function(todos){
    return todos.text
  });
  console.log(todoText)

  //filter

  const filtertodo=todos.filter((todo)=>{
    return todo.isComplete==true
  }).map((todo)=>{
    console.log(todo)
    return todo.text
  })
  console.log(filtertodo)


  const a=11;

  color=a>11?'red':'green';
//   color='orange'
console.log(color)

  switch(color){
    case 'red':
        console.log('color is red');
        break
    case 'green':
        console.log('color is green')
        break
    default:
        console.log('color is not red or green')
  }
// //oops

// // Constructor Function
// function Person(firstName, lastName, dob) {
//     // Set object properties
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob); // Set to actual date object using Date constructor
//     // this.getBirthYear = function(){
//     //   return this.dob.getFullYear();
//     // }
//     // this.getFullName = function() {
//     //   return `${this.firstName} ${this.lastName}`
//     // }
//   }
  
//   // Get Birth Year
//   Person.prototype.getBirthYear = function () {
//     return this.dob.getFullYear();
//   }
  
//   // Get Full Name
//   Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`
//   }
  
  
//   // Instantiate an object from the class
//   const person1 = new Person('John', 'Doe', '7-8-80');
//   const person2 = new Person('Steve', 'Smith', '8-2-90');
  
//   console.log(person2);
  
//   // console.log(person1.getBirthYear());
//   // console.log(person1.getFullName());


  // ES6 CLASSES
class Person {
    constructor(firstName, lastName, dob) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dob = new Date(dob);
    }
  
    // Get Birth Year
    getBirthYear() {
      return this.dob.getFullYear();
    }
  
    // Get Full Name
    getFullName() {
      return `${this.firstName} ${this.lastName}`
    }
  }
  
  const person1 = new Person('John', 'Doe', '7-8-80');
  console.log(person1.getBirthYear());
  

  //classes and inheritance

  class User {
    static count = 0;
  
    constructor(name, email, age) {
      this.name = name;
      this.email = email;
      this.age = age;
      User.countUser();
    }
  
    static countUser() {
      User.count++;
    }
  
    static printUserCount() {
      console.log(`Total users: ${User.count}`);
    }
  
    eligibleOrNot() {
      if (this.age > 18) {
        console.log(`${this.name}, you are eligible`);
      } else {
        console.log(`${this.name}, you are not eligible`);
      }
    }
  }
  
  // let obj1 = new User('Mohit', 'mohit@gmail.com', 28);
  // obj1.eligibleOrNot();
  // User.printUserCount();
  
  class Member extends User{
    constructor(name, email, age, memberPackage){
      super(name, email, age);
      this.package = memberPackage;
    }
  
    getPackage(){
      console.log(this.name+' is subscribed to the '+this.package+' package');
    }
  }
  
  let mike = new Member('mike', 'mike@gmail.com', 24, 'Standard');
  
  mike.getPackage();
  mike.eligibleOrNot();