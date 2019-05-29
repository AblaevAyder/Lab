function ex1() {

var fn = (function () {
var num = 0;
return function() {
return ++num;
}
})();
alert(fn()); //1
alert(fn()); //2
alert(fn()); //3
}

function ex2() {
  function sum(a) {
return function(b) {
c= a+b
console.log(c);
}
}
sum(1)(6)
}

function ex3() {
function square(a,b) {
  function sqr(c) {
    return c*c
  }
  return sqr(a)+sqr(b)
}
console.log(square(2,3));
}

function ex4() {
  function f(a){
  return function(b){
  alert(a+", "+b)
  }
  }
  var tuzikFunction = f("Tuzik")
tuzikFunction("fuuuuu")
tuzikFunction("fas")
tuzikFunction("day lapu")
tuzikFunction("lejat")
}

function ex5() {
  var animal = {
eats:true
}
var elephant = {
jumps:false,
loves: "bananas",
trunk: true
}
elephant.__proto__ = animal
for(var key in elephant){
console.log(key);
}
console.log(elephant.hasOwnProperty("eats"));
console.log(elephant.hasOwnProperty("jumps"));
console.log(elephant.hasOwnProperty("loves"));
console.log(elephant.hasOwnProperty("trunk"));
delete elephant.eats
delete elephant.trunk
for(var key in elephant){
console.log(key);
}
}

function ex6() {
  var pet = {
eats: function(){
this.full = true
}
}
var kitten = {
say : "meow",
__proto__:pet
}
kitten.eats()
console.log(pet);
console.log(kitten);
}

function ex7() {
  var person = {
eats:true,
legs:2,
speaks:true
}
var dusya = {
gender: "f",
age:18
}
var vasya = {
gender: "m",
loves: ["milk","fruits"]
}
dusya.__proto__ = person
vasya.__proto__ = person
for(var key in dusya){
console.log(key);
}
for(var key in vasya){
console.log(key);
}
person.learnedEnglish = function () {
  this.knowsEnglish = true
}
vasya.learnedEnglish()
}

function ex8() {
  var car = {
    maxspeed: 260,
    speed:[100,200],
    wheel:function () {
      this.wheels = true
    }
  }
  var bus = {
    persons: 37,
    __proto__: car
  }
  var autotruck = {
    tons: 5,
    __proto__: car
  }
}     
