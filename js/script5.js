console.log(true+1);
console.log(false+1);
console.log(true-1);
console.log(false-1);

console.log(false+false);
console.log(false+true);
console.log(false-false);
console.log(false-true);
console.log(true-false);
console.log(true-true);
console.log(true+false);
console.log(true+true);

console.log("123"+false);
console.log("123"+true);
console.log("123"-false);
console.log("123"-true);
//2
var A = [1, 3, 4]
console.log(A[0]+A[1]+A[2]);
console.log(A[0]*A[1]*A[2]);
var B = A.length
var C = ++B
console.log(C);
console.log(A[A.length-1]%C);
//3
var a = Math.random()*(10-1)+1
var b = Math.random()*(10-1)+1
var c = Math.random()*(10-1)+1
var p = (a+b+c)/2
var S = Math.sqrt(p*(p-a)*(p-b)*(p-c))
console.log(S);
//4
var x=4, y
y=4*x++// y= 4*4 x=4+1
console.log(y, x);

var x=4, y
y=4*++x //x=4+1  y=4*x
console.log(y, x);

var x=4, y
y=4*x--
console.log(y, x);

var x=4, y
y=4*--x
console.log(y, x);
//5
var n = 10
n = n + 5 // n = 15
console.log(n);

var x = 10
x += 5//x = x+5
console.log(x);

//1)
var a = 2
a*=2+5
console.log(a);

//2)
var a1 = 3, c1 = 2+ ++a1
a1 = a1+c1
console.log(a1);

//3)
var a2 = 3, c2= 2+a2++//a2=a2+1
a2 = a2+c2
console.log(a2);
