/*var num1 = [1, 2, 4, 5]
var num2 = [3, 546, 456, 2345, 435], A, B

if (num1.length > num2.length){
A = Math.max(...num1)
console.log(A);}
else {
  B = num1.concat(num2).sort()
  console.log(B);
}*/

/*var val = 0, i
for ( i=0; i<3; i++ )
{val= val + 1
}
console.log(val);

for (i=1;i<=5;i++){
  console.log(i);
  if(i==3){
    break
  }
}*/

var i,j, val=0
for (i=0,j=8;i+j<=10;i=i+2,j--){
  val = val+i*j
  console.log(val);
}
