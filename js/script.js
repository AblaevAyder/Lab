/*var One="One";
var Two= "Two";
var Tree="Three";

var array=["One", "Two", "Three"];
var array2= new Array(2,3,4);
console.log(array2)

var array2= new Array(2);
array2[1]=5
array2[0]=5
console.log(array2)

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);*/
var town=["simf","yalta","jankoy"]
town[1]="saki"
town[3]="evpatoriya"
console.log(town[0], town[1], town[town.length-1])
var number=[1,2,3,4,6]
console.log(number[1],number[number.length-2],number.length);
var letters=["ayder","ablaev","rustem","ayduxa","death"]
letters[0]=letters[2]
letters[2]="ayder"
console.log(letters);
//4
var B=Math.random()*(1000-1)-1
var A=[Math.round(B),Math.round(B),Math.round(B)]
A.push(100)
A.unshift(100)
console.log(A);
A.shift()
A.pop()
console.log(A);
A.length=0
console.log(A);
//5
var collors=["white","yellow","blue"]

console.log(collors.join(" или "));

console.log(collors.join(", "));

console.log(collors.join(": "));
var num1 = [1, 2, 3]
var num2 = [4, 5, 6]
var num3 = [7, 8, 9]
var nums = num1.concat(num2, num3)
console.log(nums);
//6
var collors1 = ["white","blue","yellow"]
var numbers = [1, 2, 3]
var collornumbers = collors1.concat(numbers)
console.log(collornumbers);
collors1.length = 0
console.log(collors1);
var arr = [ 1, 2, 3, 4, 5, 6]
console.log(arr.slice(2)) // получим массив [3, 4, 5, 6]
console.log(arr.slice(1, 4)) // получим массив [2, 3, 4]
console.log(arr.slice(2, 3)) // получим [3]
//7
console.log(arr.slice(1))// [2, 3, 4, 5, 6]
console.log(arr.slice(1,4))// [2, 3, 4]
console.log(arr.slice(3,4))// [4]
console.log(arr.slice(-2))// [5, 6]

console.log(arr.slice(arr.length-2))//[5, 6]
console.log(arr.slice(-3, -1))// [4, 5]
console.log(arr.slice(arr.length-3, arr.length-1))// [4, 5]

console.log(arr.reverse())//[6, 5, 4, 3, 2, 1]
var arr1 = [25,-4,30,-2,11,0]
console.log(arr1.sort())//[-2,-4,0,11,25,30]
//8
var collor = ["white","yellow","blue"]
console.log(collor.reverse());
console.log(collor.sort());

var arr2 = [ 5,4,3,2,1,0 ]
arr2.splice(2)
console.log(arr2)//[5,4] - удалены все элементы начиная со 2-го индекса
var arr3 = [ 5,4,3,2,1,0 ]
arr3.splice(0)
console.log(arr3)//[0] - удалены все элементы массива
var arr4 = [ 5,4,3,2,1,0 ]
arr4.splice(1,4)
console.log(arr4)//[5,0] – в массиве удалены элементы c 1-го по 4-й индексы
//9
var arr5 = [1,2,3,4,5,6]
arr5.splice(3,2)
console.log(arr5)//[1,2,3,6] удалены элементы начиная с 3-го и два последующих
var arr6 = [1,2,3,4,5,6]
arr6.splice(-5,2)
console.log(arr6)//[1,4,5,6] удалены елементы начиная с 1-го индекса и два последующих
var arr7 = [1,2,3,4,5,6]
arr6.splice(2,0,7)
console.log(arr7)//[1,2,3,4,5,6]
