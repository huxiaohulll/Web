

/*

//console.log(window);
//window.alert(1);
//Single element
console.log(document.getElementById('my-form'))  ;
//查询选择器
console.log(document.querySelector('.container'))  ;

console.log(document.querySelector('h1'))  ;

//Multiple element

console.log(document.querySelectorAll('.item'))  ;

console.log(document.getElementsByClassName('item'))  ;

console.log(document.getElementsByTagName('li'))  ;





const ul = document.querySelector('.items') ;
// ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent='Hello';
ul.children[1].textContent='World';
ul.children[2].innerHTML = '<h4>!</h4>';



const btn = document.querySelector('.btn');
//btn.style.background='red';

//监听事件


//当鼠标点击到button时，样式发生改变
btn.addEventListener('click',(e) => {
    e.preventDefault();
 //   console.log('click...');
    console.log(e);
    //id用# ,类用.  重要
    document.querySelector("#my-form").style.background ='#ccc';
    document.querySelector("body").classList.add('bg-dark');
    document.querySelector(".items").lastElementChild.innerHTML =
    '<h1> HaHaHa </h1>'
})

//当鼠标移到button时，样式发生改变
btn.addEventListener('mouseover',(e) => {
    e.preventDefault();
 //   console.log('click...');
    console.log(e);
    //id用# ,类用.  重要
    document.querySelector("#my-form").style.background ='#ccc';
    document.querySelector("body").classList.add('bg-dark');
    document.querySelector(".items").lastElementChild.innerHTML =
    '<h1> HaHaHa </h1>'
})

//当鼠标移出button时，样式发生改变
btn.addEventListener('mouseout',(e) => {
    e.preventDefault();
 //   console.log('click...');
    console.log(e);
    //id用# ,类用.  重要
    document.querySelector("#my-form").style.background ='#ccc';
    document.querySelector("body").classList.add('bg-dark');
    document.querySelector(".items").lastElementChild.innerHTML =
    '<h1> HaHaHa </h1>'
})
*/



//用户表单脚本
// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
 // console.log(nameInput.value);
 if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    setTimeout(() => msg.remove(), 3000);
 }else{
    console.log('success');
     // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
 }
}