


console.log('hello world!!');
//console.error('this is an error');


//let const


//string 

const s='Hello World';
const ss='computer,code,it';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLocaleLowerCase());
console.log(s.substring(0,5).toLocaleUpperCase());
console.log(s.split(''));
console.log(ss.split(','));

//Arrays

const fruits = ['apple','pear','orange'];
fruits[3]='grape'
fruits.push('mangos')
fruits.unshift('strawberries')
fruits.pop()
console.log(Array.isArray(fruits))   
console.log(fruits[1])
console.log(fruits)


//Arrays object

const todos = [
    {
        id :1,
        text :'one',
        isCompleted:true
    },
    {
        id :2,
        text : 'two',
        isCompleted:false
    },
    {
        id :3,
        text : 'three',
        isCompleted:true
    }

];

console.log(todos);
const todoJSON = JSON.stringify(todos)
console.log(todoJSON)




//For 

for(let i = 0 ;i<10;i++){
    console.log(`for loop number: ${i}`);
}

//while 
let i = 0;
while(i<10){
    console.log(`while loop number: ${i}`);
    i++;
}


for ( let todo of todos){
    console.log(todo.text);
}

//forEach,map,filter

todos.forEach(function(todo){
    console.log(todo.text);

})


const todosText = todos.map(function(todo){
    return todo.text;
})
console.log(todosText);

//选择对象
const todosIsCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
})
console.log(todosIsCompleted);


//结合
const todosIs= todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todosIs);



// if else switch

//function

const todos = [
    {
        id :1,
        text :'one',
        isCompleted:true
    },
    {
        id :2,
        text : 'two',
        isCompleted:false
    },
    {
        id :3,
        text : 'three',
        isCompleted:true
    }

];


function addNums(num1,num2){
    return num1+num2;
}
console.log(addNums(1,2));

//const addNums1 = (num1= 1, num2 =3) => {console.log(num1+num2)}; 这种写法也可以
const addNums1 = (num1= 1, num2 =3) => console.log(num1+num2);

const addNums2 = (num1= 1, num2 =3) => num1+num2;

const addNums3 = num1 => num1+5;

addNums1(2,5);
console.log(addNums2(9,1));
console.log(addNums3(10));

todos.forEach((todo)=>console.log(todo.text));


//constructor function 与类相仿


function Person(firstname,lastname,dob){
	this.firstname = firstname;
	this.lastname = lastname;
    this.dob = new Date(dob);
    // this.birthYear = function(){
    //    return  this.dob.getFullYear();
    // };
    // this.fullname = function(){
    //     return `${this.firstname} ${this.lastname}`;

    // };
    
    
}

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}
Person.prototype.getFullName =function(){
    return `${this.firstname} ${this.lastname}`;
}


const person1=new Person('John','Doe','1996-3-5');
console.log(person1);



//Class
class People{

    constructor(firstname,lastname,dob){
    this.firstname = firstname;
	this.lastname = lastname;
    this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();

    }

    getFullName(){
        return `${this.firstname} ${this.lastname}`;

    }
}


const person2=new People('John','Doe','2006-3-5');
console.log(person2);