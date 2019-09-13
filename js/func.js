/*function obm(w, l ,h) {
  var V = w*h*l;
  console.log();
}
obm(3,4,5)

obm2= function (w,l,h) {
  var V = w*l*h
console.log(V);
}
obm2(2,3,4)

var obm3 = new Function ("w,h,l", "var V = w*h*l; console.log(V)");

obm3(2,3,4)

(function (w,h,l) {
  var V = w*h*l
console.log(V);
})(2,3,4)

obm4 = (w,l,h)=> {return w*h*l};
console.log(obm4(2,3,4))

((w,h,l)=>V = w*h*l console.log(V))(2,3,4)*/


/*var summ = 0
function sum(n) {
  if (n==0){
    console.log(summ)
  }
  else{
summ = summ + n%10
sum(Math.floor(n/10))
}
}
sum(3917)

//4
var summ1 = 1
function d(n) {
  if (n>0) {
    summ1=summ1*n
    d(n-1)
  }
  else {
    console.log(summ1)
  }
}
d(4)

//5
var pw=1
function pow(x,y) {
  if (x==0 && y==0) {
    alert("undefined")
  }
  else {
    if (y<0) {
      pw = pw*(1/x)
      pow(x,y+1)
}
    else {
if (y>0) {
  pw = pw*x
  pow(x,y-1)
}else {
  alert(pw)
}
}
}
}
pow(-2,5)*/

// 1
function ex1() {

getMSG = (a)=> {return a}
console.log(getMSG(45));

showOddEven = (x)=>{
  if (x%2) {alert("Number Odd")}
else {alert("Number Even")}
}
console.log(showOddEven(34));

lengthMsh = (b)=>{return b.length}
console.log(lengthMsh("qwdqwd"));

var person= {name:"ayder"}
getname=(person)=>{return person.name}
console.log(getname(person));

getWeight=()=>{var person={age:15,weight:40}
 return person.weight}
console.log(getWeight());}

//2
function ex2() {

function obm(w,l,h) {
  console.log("V=" + w*l*h);
}
obm(2,3,2)

obm1=function (w,l,h) {
  console.log("V2=" + w*l*h);
}
obm1(2,3,2);

var obm2 = new Function ("w,h,l","console.log('V3=' + w*l*h)")
obm2(2,3,2);

(function (w,h,l) {
console.log("V4=" + w*l*h);
})(2,3,2)

obm4 = (w,l,h)=> {console.log("V5=" + w*l*h)};
obm4(2,3,2);

((w,h,l)=>console.log("V6=" + w*l*h))(2,3,2)}

//3
function ex3() {
  if(1 || 2 || 3){console.log("1 || 2 || 3 = true");}
  else {console.log("1 || 2 || 3=false");}

  if(1 && 2 && 3){console.log("1 && 2 && 3 = true");}
  else {console.log("1 && 2 && 3=false");}

  if(1 == 2 || 2 || 3){console.log("1 == 2 || 2 || 3 = true");}
  else {console.log("1 == 2 || 2 || 3=false");}

  if(2!=2 || 1<2){console.log("2!=2 || 1<2 = true");}
  else {console.log("2!=2 || 1<2=false");}

  if(1=='1' || 'Привет'){console.log("1=='1' || 'Привет' = true");}
  else {console.log("1=='1' || 'Привет'=false");}

  if(1==='1' || 'Привет'){console.log("1==='1' || 'Привет' = true");}
  else {console.log("1==='1' || 'Привет'=false");}

  if("Privet"||"Masha"){console.log("'Privet'||'Masha' = true");}
  else {console.log("'Privet'||'Masha'=false");}

  if('Privet'&&'Masha'){console.log("'Privet'&&'Masha' = true");}
  else {console.log("'Privet'&&'Masha'=false");}

  if(1 || 2 && 0){console.log("1 || 2 && 0 = true");}
  else {console.log("1 || 2 && 0=false");}

  if(''|| 2 && 0 || 3){console.log("''|| 2 && 0 || 3 = true");}
  else {console.log("''|| 2 && 0 || 3=false");}

  if('Abc'<'adb'){console.log("'Abc'<'adb' = true");}
  else {console.log("'Abc'<'adb'=false");}

  if('aczy'<'acxx'){console.log("'aczy'<'acxx' = true");}
  else {console.log("'aczy'<'acxx'=false");}

console.log('aczy'<'acxx')
}

console.log(1 && 2 && 3)
