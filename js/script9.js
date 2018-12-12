/*
var S=0, A=[],i
for (i=0;i<=5;i++){
  A[i]=Math.floor(Math.random()*100)
}
console.log(A);
for (i=0;i<A.length;i++){
  S = S + A[i]
}
console.log(S);


var arr=[],sum=0
for(i=0;i<5;i++){
  arr[i]=prompt("введите arr["+i+"]=")
  sum+= +arr[i]
  console.log("arr["+i+"]=" + arr[i]);
}

console.log(arr);
console.log(sum);
*/

/*
//6
var P=1, A=[],i, S= +prompt("vvedite chislo=","")
for (i=0;i<S;i++){
  A[i]=Math.floor(Math.random()*100)
}
console.log(A);
for (i=0;i<A.length;i++){
  P = P * A[i]
}
console.log(P);
//7
var arr=[],sum=0,sum=0,cnt=0
for(i=0;i<5;i++){
  arr[i]=prompt("введите arr["+i+"]=")
  console.log("arr["+i+"]=" + arr[i]);
}
for(i=0;i<arr.length;i++)
   if(arr[i]<0){
     sum+=+arr[i]
     cnt++
   }
console.log(sum/cnt);
*/

/*
//8
var A=[], B = [], C=0
var key = +prompt("введите искомое значение", "")
for(i=0;i<5;i++){
   A[i]=Math.floor(Math.random()*10)
}
for(i=0;i<A.length;i++){
  if(A[i] == key){
     B[C] = i
     C++
    }
}
if (B.length==0)console.log("искомого значения нет");
else {
  console.log("индексы совпадения" + B);
}
*/


//9
var A=[]
var B=[], C=[]
for (i=0;i<5;i++){
  A[i]=+prompt("введите A["+i+"]=")
}
for(i=0;i<A.length;i++)
if(A[i]>0) B.push(A[i])
else {
  if (A[i]<0) C.push(A[i])
}
console.log(A);
console.log("положительные числа: " + B);
console.log("отрицательные числа: " + C)


/*
//10
var A=[]
var B=[], C=[]
for(i=0;i<5;i++){
   A[i]=Math.floor(Math.random()*10)
   B[i]=+prompt("введите B["+i+"]=")
   C.push(A[i]+B[i])}
console.log(A);
console.log(B);
console.log(C);
*/
/*
//11
var A = []
var leastnum= 0, greatnum = 0
var B = +prompt("vvedite dlinu massiva=","")
for (i=0;i<B;i++){
   A[i]=Math.floor(Math.random()*10-5)}
for (i=0;i<5;i++){
  if(A[i]>0&A[i]>greatnum)
  greatnum= A[i]
  else {
    if(A[i]<0&A[i]<leastnum)
    leastnum= A[i]
  }
}
console.log(A);
console.log("наименьшее чилло " + leastnum);
console.log("наибольшее число " + greatnum);
*/
