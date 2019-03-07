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


var summ = 0
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
pow(-2,5)
