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
  salaries= new Object({"anna":500,"ivan":40,"alie":200,"fedya":500})
  var k=0, max=0, maxkey = []
  for (var key in salaries) {
    k++
  }
  if(k==0)alert(0)
  else {
    for(var key in salaries){
      if(salaries[key]>max) {
       max[i] = salaries[key]
       maxkey.push(key)
    }
  }
  alert(maxkey)
}
}
