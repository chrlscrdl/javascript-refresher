
const obj = {
  name: "charles",
  age: 20,
  gender: "male",
  isActive: true
}
const rs = Object.getOwnPropertyNames(Object);
////console.log(rs);


//console.log(Object.entries(obj));


for(let [key, value] of Object.entries(obj)){
  //console.log(key);
  //console.log(value);
}

const arr = [1,2,3,4,5,6];

const result = arr.copy
//console.log(arr);
//console.log(result);

////consolee.log(Object.getOwnPropertyNames(Set.prototype))


////consolee.log(Object.getOwnPropertyNames(Object));

let obj1 = {
  name: "Charles",
  age: 23
}

let obj2 = {
  gender: "male",
  active: false
}

let res = Object.assign(obj1, obj2)
//console.log(res);
//console.log(obj1);

const formData = {
  name: "Charles",
  email: "",
  age: 24,
  phone: null
}

const cleaned = Object.fromEntries(
  //.entries() returns an array where each item is a [key, value] tuple.
  Object.entries(formData)
    .filter(([key, value])=>{
      return value !== "" && value !== null;
    })
);

function Person(){


}

const p = new Person();

p.__proto__ = Person.prototype;

//console.log(p.__proto__)


class Animal{
  #privData = 23;

  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  get privData(){
    return this.#privData;
  }

  set privData(data){
    this.#privData = data;
  }
}


class Dog extends Animal{
  static id = 123;
  constructor(name, age, breed="N/A"){
    super(name, age);
    this.breed = breed;
  }

  static hello(){
    //console.log('hello')
  }

  bark(){
    //console.log("AW!")
  }
}

let c = new Animal();
c.privData = 23;
let res2 = c.privData;

//console.log(res2);


//console.log(Dog.id);
Dog.hello()






async function loadData(){
  try{
    let response = await fetch("https://dog.ceo/api/breeds/image/randoz");
    let data = await response.json();
    //console.log(data);
  }catch(error){
    //console.log(error);
  }
}


function loadFile(callback) {
  //won't work with node, no Window obj.
  // let xhr = new XMLHttpRequest();
  // xhr.open("GET", "data.json", true);
  // xhr.onload = function(){
  //   if(xhr.status === 200){
  //     callback(null, JSON.parse(xhr.responseText));
  //   }else{
  //     callback("HTTP Error" + xhr.status, null);
  //   }
  // }

  // xhr.onError = function(){
  //   callback("Network Error", null);
  // }

  // xhr.send();
}

loadFile(function(error,data){
  if(error){
    //console.log(error);
    return;
  }else{
    //console.log(data);
  }
})

async function loadFileAsync(){
  try{

    let response = await fetch('urlHere');
    if(!response.ok){
      //console.log('HTTP Error:', response.status);
      return;
    }

    let data = await response.json();
    //console.log(data);

  }catch(err){
    //console.log("Network Error")
  }
}

loadFileAsync();


let p1 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('p1')
  },50)
});
let p2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('p2')
  },2000)
});
let p3 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve('p3')
  },1000)
});




let promiseFunc = (hasError) => {
  if(hasError){
    throw new Error("Synchronous error!");
    return;
  }
  return "someValue"
}



// let {promise, resolve, reject} =  Promise.withResolvers();

// setTimeout(()=>{
//   const success = Math.random() > 0.5;
//   if(success){
//     resolve("Operation successful!");
//   }else{
//     reject("Operation failed!");
//   } 
// }, 1000);

// promise
//   .then((msg)=>console.log(msg))
//   .catch((err)=>console.log(err));

//loaded at load time
import randomClass, { add as addyo } from "./module.js"
import * as module_sample from "./module.js"
module_sample

import * as fromModule2 from "./module2.js";
//console.log(fromModule2);


//console.log(Object.getOwnPropertyNames(Object));

async function dynamicImport(){
  const module = await import('./module.js');
  //console.log('dynamicImport')
  //console.log(module);
}

dynamicImport();


//lazy loading, optimized performance, conditional imports
async function dynamicImport2(x){
  const module = await import('./weightConverter.js');
  let result = module.toPounds(x);
  //console.log(result);
}  

dynamicImport2(20);


const me = {
  name: "Charles",
  age: 23,
  gender: "male"
}


let jsonSample = JSON.stringify(me);
let me2 = JSON.parse(jsonSample);

console.log(me2);


// Speedrun ES6 concepts
//let, const, vs var
//Difference: block scope, hoisting var, and immutability.
//var can be access on top of the initialization (this can be problemmatic in large-scale codebases)
//let and const are much more predicatable and follow block-scoped behavior.

let a = 1;
//note that variables with obj are still mutable via Object methods and dot operator since it hold a reference
const objsample = {
  name: "hheee hee",
  //undefine/global window
  arrowFunc: ()=>{
    console.log(this);
  },
  normalFunc: function(){
    //prints instance of the caller obj
    console.log(this)
  }
}

//arrow function and anonymous functions
//inherits the surrounding scope, best used as a callback for event, object method e.g., Array.map() etc that runs one time.
const onClick = (e, params) => {
  //blabla
}
//no () param for single, no {} for auto return values.
const square = x => x*2

const onClick2 = function(){
  //undefined / window/global
  console.log(this);
}


const friend = "friendname"
//template literals to embed variables in strings and do multiline
const templateLiterals = `Hello my ${friend}` 

//destructuring -> extract values from arrays or objects
//array destructure
function useState(initVal = null){
  let value = initVal;  
  const setFunc = function(newVal){
    value = newVal
  }
  return [value, setFunc]
}

let [name, setName] = useState("Lebron");

//obj destructure w/ alias
const destrObj = {name: "Charles", age: 25};
const {name: fullName, age} = destrObj

//spread operator ->
const arr1 = [1,2,3];
const arr2 = [...arr1,4,5,6]

const objSpread1 = {name: "charles", age: 25}
const objSpread2 = {...objSpread1, active: false, age: 33};

//rest operator, collect multiple arguments into an array

const restFunc = function(...sum){
  sum.reduce((acc, val)=>{
    return acc + val;
  })
}
//dynamic argument count since we use rest operator
restFunc(1,2,3,4,5,6,7);

//classes and OOP
//encapsulation: all related functions and variables are contained in the same obj,
//inheritance: can use keyword: extend to inherit from class to another

class DataGrid{
  //initial var
  #privVar = 23;
  
  constructor(val1){
    this.name = val1;
    this.val2 = "something"
  }
  //shared method
  dataGridFunc(){

  }

  get privVar(){
    return this.#privVar;
  }

  set privVar(newVal){
    this.#privVar = newVal
  }
}

//constructor function old

function constructorFunc(){
  //this accessible due to new() keyword when initializing an obj
  this.name = name;
  this.age = age;
  //each instance has their own copy of these var/func
  this.greet = function(){
    console.log(`${this.name} hi, ${this.age}`)
  }
}
//to implement inheritance, use proto

constructorFunc.prototype.commonFunc = function() {console.log('hey')}

console.log(Object.getOwnPropertyNames(Response.prototype))



console.log(Object.getOwnPropertyNames(Array.prototype))




const jsonString = '{"name": "Charles", "age": "23"}';

const jsonOBJ = JSON.parse(jsonString);
console.log(jsonOBJ);


function renderImage(imgSrc){
  const divImgContainer = document.getElementById('img-container');
  divImgContainer.innerHTML = `<img src="${imgSrc}" alt="">`;
}

async function getData(){
  try{
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    if(!response.ok){
      throw new Error(response.status + response.data);
    }
    const data = await response.json();
    console.log(data);
    renderImage(data.message);
  }catch(err){
    console.log(err);
    return;
  }
}


const buttonAddImg = document.getElementById('btn-add-img');
buttonAddImg.addEventListener('click', () => {
  getData();
})

let list = [];

async function getInitialList(){
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!response.ok){
      throw new Error(response.status);
    }

    const data = await response.json();
    list = data;
    console.log(data);
    let newData = data.map(val=> {return {title: val.title}})
    console.log(newData);
    displayData(newData);


  } catch (error) {
    console.log(error);
  }
}

function displayData(data, searchValue = null){
  const unorderedListElement = document.getElementById("list-name");
 
  if(searchValue){
    console.log('filterDetected')
    unorderedListElement.innerHTML = "";
    const listElement = document.createElement("li");
    listElement.textContent = searchValue;
    unorderedListElement.appendChild(listElement)
    return;
  }

  for(let obj of data){
    console.log('initialRender')
    const listElement = document.createElement("li");
    listElement.textContent = obj.title;
    unorderedListElement.appendChild(listElement);
  }
}


console.log(Object.getOwnPropertyNames(Object))



function initializeEventListeners(){
  const searchBtn = document.getElementById('btn-find-text');
  searchBtn.addEventListener('click', (e)=>{
    const targetVal = document.getElementById('input-search-value').value;
    console.log(targetVal);
    //findData
    console.log(list)
    const targetObj = list.find(({title}) => title === targetVal);
    if(targetObj){
      displayData(null, targetObj.title);
    }else{
      //display not available
    }
   
  })
}


function startProgram(){
  getInitialList();
  initializeEventListeners();
}
startProgram();







//similar to
// const obj = {}
//outdated
//obj.__proto__ = constructoFunc.prototype

//Promises -> special object that represents the state of an asynchronous task
// js is single threaded which means it can only handle one task at atime
//event loop allows js to handle program asynchronously using web apis, micro/macro task queue and event loop engine (everything in v8 or node)
//resolves callback hell during the callback error first era.
//sample: 

// function login(username, password, callback) {
//   setTimeout(() => {
//     console.log("User logged in");
//     callback(username);
//   }, 1000);
// }

// function getUser(username, callback) {
//   setTimeout(() => {
//     console.log("User data fetched");
//     callback({ username, id: 1 });
//   }, 1000);
// }

// function getPosts(userId, callback) {
//   setTimeout(() => {
//     console.log("Posts fetched");
//     callback(["post1", "post2"]);
//   }, 1000);
// }

//EWWW
// login("charles", "1234", (username) => {
//   getUser(username, (user) => {
//     getPosts(user.id, (posts) => {
//       console.log("Final posts:", posts);
//     });
//   });
// });

//Keypoints in Promise: creates a promise object that has the status, fulfillcallback, failcallback
//constructor's callback immediately runs,
//.then()/.catch part is registered as the promise obj fulfillobj/failcallback





// [
//   'length',     'name',
//   'prototype',  'all',
//   'allSettled', 'any',
//   'race',       'resolve',
//   'reject',     'withResolvers',
//   'try'
// ]



// (method) ObjectConstructor.fromEntries<T = any>(
//   entries: Iterable<readonly [PropertyKey, T]>
// ): {
//   [k: string]: T;
// }

// [
//   'length',
//   'name',
//   'prototype',
//   'assign',
//   'getOwnPropertyDescriptor',
//   'getOwnPropertyDescriptors',
//   'getOwnPropertyNames',
//   'getOwnPropertySymbols',
//   'hasOwn',
//   'is',
//   'preventExtensions',
//   'seal',
//   'create',
//   'defineProperties',
//   'defineProperty',
//   'freeze',
//   'getPrototypeOf',
//   'setPrototypeOf',
//   'isExtensible',
//   'isFrozen',
//   'isSealed',
//   'keys',
//   'entries',
//   'fromEntries',
//   'values',
//   'groupBy'
// ]