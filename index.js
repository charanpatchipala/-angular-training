console.log(4-5);
console.log('hi raa charan');
/*let name = 'charan';
let boolean = false;
let age = 23;
age = 22;
let me;
let money = null;
console.log(typeof me);
console.log(typeof typeof me);
console.log(typeof money);
console.log(typeof typeof money); */
/* let person = {
    name: 'charan',
    age: 22,
    male: true
};

person.name = 'charan patchipala';
console.log(person);*/
// arrays in js
let pd1= ['charan',22,'male'];
pd1[3]='jatlakondur';
console.log(pd1[1]);
let pd2 = [...pd1];
let pd3 = [...pd1,...pd2]; 
console.log(pd1,' '+ pd2+' ' +pd3 );
// fuctions
//anonymous iife
(function (x,y){
    return n = x + y ;
})(4,5);
//add(3,5);
console.log(n);

let add = (a,b) => {n = a + b};
console.log(add(1,200));
/*
// if else
function mul(age){
    let occation;
    if(age = 50){
occation = ('silver jubliee');
    }

    else{
 occation = ('other');
    }
    console.log(occation);
};
mul(49);*/

/*function mul(age){
    
    if(age > 50){
 var occation = ('congrats buddies 🧑‍🤝‍🧑💕💕💕💕💕💕💕 its your silver jubliee');
    }
    else if(age < 50){
        var occation = ('better luck nexttime baby');
           }
    else{
 var occation = ('someother time baby');
    }
    console.log(occation);
}mul(20); */
/*block function
if(true){
var a = 10;
let b = 20;
const c = 30;
}
console.log(a);
console.log(b);
console.log(c);*/

// implicit
var s = 3;
var h = true;
var r = "2";
console.log(s+r);
console.log(s+ +r);
console.log(s+ parseFloat(r));
console.log(s+h);
console.log(s-r);
//console.log(typeof h);


// for looops
var marks = [10,20,80,40];
for (var mark of marks) {
    console.log("mark is", mark);
  }
  for (var mark of marks) {
    console.log("mark is", mark);
  }
  for (var index in marks) {
    console.log("index is", index);
    console.log("mark is", marks[index]);
  }

  var sum = 0;
  /*for(var mark of marks){
  sum += mark;
  }console.log(sum);

  for (var mark in marks) {
    sum += marks[mark];
  }
  console.log(sum);

  let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };
  
  for (var salary of Object.keys(salaries)) {
    console.log(salary);
  }
  for (var salary of Object.values(salaries)) {
    console.log(salary);
  }
  for (var key in salaries) {
    console.log(key, " salary is ", salaries[key]);
  } */

  /* TEMPLATE LITERAL
  function fullname(firstname, lastname) {
    return "Welcome " + lastname + ", " + firstname + " 😊!!!"
} 
console.log(fullname('charan','reddy'));*/

function fullname(firstname, lastname) {
    return `Welcome ${lastname},${firstname}😊!!!`
} 
console.log(fullname('charan','reddy'));
