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