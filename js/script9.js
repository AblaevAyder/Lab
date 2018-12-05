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
  console.log("arr["+i+"]=" + arr[i]);
}
for(i=0;i<arr.length;i++){
  sum+= +arr[i]
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

//8
var A=[]
for(i=0;i<5;i++){
   A[i]=prompt("введите A["+i+"]=")
}
for(i=0;i<A.length;i++){
  if(A[i]== "key"){
    console.log(A[i]);
  }
  else {
    console.log("искомого значения нет");
  }
  break
}
