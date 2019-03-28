//1
function stud() {
var student = {}
student.name = "Muhammed"
student.surname = "Petrov"
student.name = "Vasya"
delete student.name
console.log(student);
}
//2
function rat() {
var rating = {
  vasya : 5,
  petya : 4,
  asie : 2
}
var k=0,i,j=0,a
for (var key in rating){
  k++
}
if (k==0){
  console.log(0)
}
else {
  for (i=1;i<k;i++){
    j=j+rating[key]
  }
  a= j/k
  console.log(a);
  console.log(rating[key]);
}
}
//3
function sal() {
  var salaries = {
    vasya : 500,
    petya : 40,
    asie : 200
  }
  for (var key in salaries){
    k++;

  }
  if(k==0){
    console.log("net sotrudnikov");
  }
  else {

  }
}

//4
function country() {
  var country = {
    name : "russia",
    people : 146000000,
    s : 17000000,
    capital : {
      name:"moscow",
      year: 990
    },
    plot: function () {
      return +this.s/+this.people
    }
  }
  console.log(country.plot());
}
//5
function ex5() {
  var a = [], b = 0,i=-1

  do {
    i++
    a[i] = +prompt("vvedite chislo","")
   b+=a[i]

  }
  while (a[i]!=0) {

  }
  console.log(b);
}
