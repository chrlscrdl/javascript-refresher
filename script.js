
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