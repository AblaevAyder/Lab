var num1 = [1, 2, 4, 5]
var num2 = [3, 546, 456, 2345, 435], A, B

if (num1.length > num2.length){
A = Math.max(...num1)
console.log(A);}
else {
  B = num1.concat(num2).sort()
  console.log(B);
}
