function ex1() {
  function User(firstname, secondname) {
    this.name = firstname
    this.sname = secondname
    this.sayHi = function () {
      alert("Hi, " + this.name + " " + this.sname)
    }
  }
  var ayder = new User("Ayder","Ablaev")
  ayder.sayHi()
}

function ex2() {
  function Calc() {
    this.a = +prompt("vvedite a","")
    this.b = +prompt("vvedite b","")
    this.sum = function () {return this.a + this.b}
    this.mul = function () {return this.a * this.b}
    this.div = function () {
      if(this.b==0)return "error"
      else {return this.a/this.b}
    }
  }
  var calc = new Calc()
  console.log(calc.sum());
  console.log(calc.mul());
  console.log(calc.div());
}
