/*var empty = {}
var point = {x:0,y:0}
var point2 = {x:point.x,y:point.y+1}
var student = {}
var student = new Object()*/
function ex1() {


var student  = Object.create({})
student.name = "Ibra"
student.surname = "Petrov"
student.name = "Vasya"
delete student.name
console.log('age' in student)
alert(student.surname)
}

function ex2() {
  var rating = {
    "Vasya":5,
    "Petya":4,
    "Asie":2  }
  var k=0, sr,sum=0
    for(var key in rating){
      k++
    }
    if(k==0) alert(0)
    else {
      for (var key in rating){
        sum += rating[key]/k
      }
    }

    alert(sum)
}
function ex3() {
  var salaries={"anna":500,"ivan":40,"alie":200,"fedya":500}
  var k=0, max=0, maxkey = [] ,i = 1
  for (var key in salaries) {
    k++
  }
  if(k==0){console.log(0);}
  else {
    for(var key in salaries){
      if(salaries[key] > max && salaries[key] > salaries[maxkey[key]]) {
       max = salaries[key]
       maxkey[0] = key

    }
    else {
      if(salaries[key] == max && salaries[key] == salaries[maxkey[0]] ){
        max = salaries[key]
        maxkey[i] = key
        i++

      }
    }
  }
  alert(maxkey)
}
}

function ex4() {
var   bankuser = {}
bankuser.name= prompt("vvedite imya")
bankuser.money = +prompt("vvedite kol-vo deneg")
bankuser.srok = +prompt("vvedite srok vklada v mesyacah")
bankuser.dohod = function () {
  if(bankuser.money>= 100 && bankuser.money<=10000 && bankuser.srok>=1 && bankuser.srok<=12)
  {
    return 12
  }
  else {
    if((bankuser.money>10000) && (bankuser.srok>12) && (bankuser.srok<=36))
    {
      return 22
    }
    else {
      return "uncorreck"
    }
  }
}()

var bankuserClone = {};
for (var key in bankuser) {
bankuserClone[key]=bankuser[key];
}

var bankuserCopy = bankuser
bankuser.name="Ayder"

console.log(bankuser, bankuserCopy, bankuserClone);
}

function ex5() {
  function S(a,b) {
    return a*b
  }
  console.log(S(2,3));

  P=function (a,b) {
    return a*b
  }
  console.log(P(2,3));
}
function ex6() {
  sayHi ('Masha');
var phrase = "Hi, ";
function sayHi(name){
alert( phrase+name );
}
}

function ex7() {
  var value = 0;
function f() {
if (1) {
value = true;
} else {
var value = false;
}
alert( value );
}
f();
}

function ex8() {
  function test() {
alert( window );
var window = 5;
alert( window );
}
test();
}
