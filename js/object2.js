function ex1() {
  const TEST="JavaScript";
  if (TEST==="JavaScript"){

  console.log("my favorite is: "+ TEST);
  }
console.log("my favorite is: "+ TEST);
}

function ex2() {
  num = +prompt("vvedite num")
  answer = function () {
    if(num>=0){
      return "+"
    }
    else {
      return '-'
    }
  }
  console.log(answer());
}

function ex3() {
  function sayHi(fName, lName, age) {
    if(age<=17){
alert( "Hi, " + FullName() );}
else {
alert( "Bye, " + FullName() );}
function FullName() {
return fName + " " + lName;
}
}
sayHi("Masha", "Ivanova", 25);
}

function ex4() {
  function Counter() {
var Count = 1;
return function() {
return Count++;
};
}
var output = Counter();
alert( output() );
alert( output() );
alert( output() );
}

function ex5() {
  A  = [23,-3,34,-5]
  S
}

function ex6() {
  var i,j=0,M=[]
var n = +prompt("vvedite kol-vo vershin","")
for(var x=0;x<n;x++){
  M[x]=[]
}
  for ( i = 0; i < n; i++,j=i) {
    for(;j<n;j++){
      if(j==i){
        M[i][j]=0
      }
      else {
      M[i][j]=+prompt("smejni li vershini ["+(i+1)+"] i ["+(j+1)+"]","")
      M[j][i]=M[i][j]
    }
    }

}
console.log(M);
}

function ex7() {
function s(a,b) {
return (function () {return a*a})()+(function () {return b*b})()
}
alert(s(2,3))
}
