
/*
Arrow function (part-1)

No:1

function display1(){console.log("I am display1")}


const display2 = () =>{console.log("display2")}


display1();

display2();


Arrow function (part-1)

No:2

function message1(){

return "Hi i am message1";

}

console.log(message1());

Arrow function (part-1)

No:3

function message1(){

return "Hi i am message1";

}

const message2 = () => "Hi i am message2";


console.log(message1());

console.log(message2());


Arrow function (part-2)

var students =[

              {
id: 101,

name: `Mamun khan`,

gpa:2.64

},

{
id: 102,

name: `bABU khan`,

gpa:3.65

},

{
id: 103,

name: `Banjir`,

gpa:4.65

},

{
id: 104,

name: `Moyna`,

gpa:2.65

},

]

console.log(students)


Arrow function (part-2)

var students =[

              {
id: 101,

name: `Mamun khan`,

gpa:2.64

},

{
id: 102,

name: `bABU khan`,

gpa:3.65

},

{
id: 103,

name: `Banjir`,

gpa:4.65

},

{
id: 104,

name: `Moyna`,

gpa:2.65

},

]

function studentName1 (){

return students.filter(function(x){

return x. gpa > 3

}).map(function(y){
              return y.name;

});

}

const studentNames2 = () =>{return students.filter((x) => x.gpa > 3).map((y) => y. name);

}


// console.log(studentName1 ())

No:4

let a = 5;

let b = 8;

const sum = () => a+b

console.log(sum());


console.log(studentNames2 ())

No:5

let a = 5;

const sum = (b) => a+b

console.log(sum(20));

No:6

let a = 5;

const sum = (b) => a*b

console.log(sum(20));

No:6

const sum = (a,b) => a+b

console.log(sum(5,3));

No:7

const sum = (a,b) => a*b

console.log(sum(5,3));

No:8

const sum = (a,b,c) => a+b+c

console.log(sum(5,3,2));

No:8

const sum = (a,b,c) => (a+b)-c

console.log(sum(5,3,2));

No:9

const sum = (a,b,c) => (a+b)*c

console.log(sum(5,3,2));

No:10

const sum = (a,b,c) => (a+b)/ c

console.log(sum(5,3,3));

No:9

let checkAge = (age) => age <18? "you are too old" :"Great";

console.log(checkAge(10));

No:10

let checkAge = (age) => age <18? "you are too old" :"Great";

console.log(checkAge(20));

No:11

let checkAge = a =>{

return a <15 ? 15 :a;

}

console.log(checkAge(10));

No:11

let checkAge = a =>{

return a <15 ? 15 :a;

}

console.log(checkAge(10));


No:1

let users = ['mamun','babu','moyna','benjir','khan','nasim']

console.log( users[0]);

No:2

let users = ['mamun','babu','moyna','benjir','khan','nasim']

users.pop();

console.log( users);

No:3

let users = ['mamun','babu','moyna','benjir','khan','nasim']

users.push("Touhid");

console.log( users);

No:4

let users = ['mamun','babu','moyna','benjir','khan','nasim']

users.shift();

console.log(users);

No:5

let users = ['mamun','babu','moyna','benjir','khan','nasim']

users.unshift("Borhand");

console.log(users);

No:6

let users = ['mamun','babu','moyna','benjir','khan','nasim']

delete users[3];

console.log(users);

No:7

let users = ['mamun','babu','moyna','benjir','khan','nasim']

delete users[0];

console.log(0);

No:8

let users = ['mamun','babu','moyna','benjir','khan','nasim']

console.log(users[users.length-1]);

No:9

let users = ['mamun','babu','moyna','benjir','khan','nasim']

for (let i = 0;  i <users.length; i++){

console.log(users[i]);

}

No:10

let users = [

              ['Nasim','Rofik','Sumon','Tuhin'],

              ['Nasim','Rofik','Sumon','Tuhin'],


              ['Nasim','Rofik', ['Nasim','Rofik','Tuhin','Sumon'],'Mamun'],

];

console.log(users);

No:10

let users = [

              ['Nasim','Rofik','Sumon','Tuhin'],

              ['Nasim','Rofik','Sumon','Tuhin'],


              ['Nasim','Rofik', ['Nasim','Rofik','Tuhin','Sumon'],'Mamun'],

];

console.log(users[0][0]);

No:11

let users = [

              ['Nasim','Rofik','Sumon','Tuhin'],

              ['Nasim','Rofik','Sumon','Tuhin'],


              ['Nasim','Rofik', ['Nasim','Rofik','Tuhin','Sumon'],'Mamun'],

];

console.log(users[2][2][1]);

No:12

let users = ['Nasim','Rofik','Sumon','Tuhin'];

let public = ['Mamun','Khan'];

let oneArray = users.concat(public)

console.log(oneArray);

No:13

mkArray

let name = "Nasim";

mkArray = Array.from(name);

console.log(mkArray);

No:13

mkArray

let name = "Nasim";

mkArray = Array.from(name);

console.log(mkArray.join(""));

No:14

mkArray

let name = "Nasim";

mkArray = Array.from(name);

console.log(mkArray.join("+++"));

No:15

mkArray

let name = "Nasim";

mkArray = Array.from(name);

console.log(mkArray.join("+++"));

No:16

let users = ['Nasim','Fahim','Rofik','Sumon','Tuhin'];

users.splice(0,4)

console.log(users);

:16

let users = ['Nasim','Fahim','Rofik','Sumon','Tuhin'];

users.splice(3,5)

console.log(users);

No:17

var names = ['Nasim','Fahim','Rofik','Sumon','Tuhin'];

names [3] = "A"

console.log(names);


*/


// Advanced Array Methods

const products = [

{name: "Mobile", price: 600},

{name: "Desktop", price: 12000},

{name: "TV", price:3000 },

{name: "IPAD", price:1200 },

{name: "Watch", price:500 },

{name: "Trimer", price:250},

{name: "cocakola", price:30},

{name: "chocholate", price:20},

];

//NO:1 console.log(products[0].name);

//NO:2 products.forEach(item => {console.log(item.price);});

//NO:3 const filtereditems = products.filter((item)=>{

//               return item.price <0;

// })

// console.log(filtereditems);

// // NO:4

// const filtereditems = products.filter((item)=>{

// // return item.price >=500;

// return item.price <=500;

// })

// console.log(filtereditems);

// NO:5

const filtereditems = products.find((item)=>{



return item.name === "IPAD";

})

console.log(filtereditems);
