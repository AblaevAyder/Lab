/*
var d,r,sum=0 //207
d=+prompt ("Введи число",'') // сохраним в d введенное число
while ( d!=0 )
{
r = d % 10 // найдем целый остаток от деления числа на 10 2%10
sum = sum + r
d = Math.floor(d / 10) // округлим d / 10 до целого числа
console.log("d= "+d);
console.log("sum= "+sum);
console.log("r= "+r);
}
console.log("sum "  + sum)
*/
/*
//1
var i=0
while (i<3) {
  console.log("i "+i);
  i++
}
*/
/*
//2
var i=100
while (i>=0) {
  console.log("i "+i);
  i=i-20
}
*/
/*
//3
var i=-1, A=[], sum=0
while (A[i]!==0) {
    i++
  A[i]=+prompt("введите A["+i+"]=","")
}
for(i=0;i<A.length;i++){
  sum+= +A[i]}
  console.log("sum = "+sum);
*/
/*
//4
var i=10
while (i<15) {
  i=i+1
  console.log(i);
}
*/

/*
//5
for (var i = 11 ; i <= 15; i++) {
console.log(i);
}
*/
/*
//6
var val, s=0
do {
  val=+prompt("vvedite chislo","")
  s+=val*val
} while (s<=100);
console.log(s);
*/

//7
var val, sum=0
do {
  val=+prompt("vvedite chislo","")
  if (val<0) {
    sum+=val*val
  }
  else {
    sum+=val
  }
} while (sum<=100);
console.log(sum);
