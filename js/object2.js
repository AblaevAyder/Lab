function ex1() {
  const TEST="JavaScript";
  //TEST="C++"; // Присвоение постоянной переменной невозможно

  //const TEST=" C++";// Идентификатор «ТЕСТ» уже объявлен

  //var TEST="C++";// Идентификатор «ТЕСТ» уже объявлен

  //let TEST="C++";// Идентификатор «ТЕСТ» уже объявлен

  /*if (TEST==="JavaScript"){
const TEST="Java";
console.log("my favorite is: "+ TEST);
}*/

/*if (TEST==="JavaScript"){
const TEST="Java";
console.log("my favorite is: "+ TEST);
}
console.log("Now my favorite is: "+ TEST);*/



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
  A  = [23,-3,34,-5],B=[], i=0
  function positive(a) {
    if(a>0) return true
    else  return false
  }
  while (i<5) {
  if(positive(A[i])==true){
    B.push(A[i])}
    i++
  }
  console.log(B);
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
  var i,j=0,M=[],k=0
var n = +prompt("vvedite kol-vo vershin","")
for(var x=0;x<n;x++){
  M[x]=[]}
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
for ( i = 0; i < n; i++) {
  for(j=0;j<n;j++){
    if(M[i][j]==1){
      k++
    }
  }
}
console.log("колво дорог = " + k/2 );
}
