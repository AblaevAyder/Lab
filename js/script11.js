function fun1() {
    alert("hello")
}

function twoPow() {
  val = +prompt("vvedite chilo","")
  val = val * val
  console.log("val^2= " + val);
}

function averageArr() {
var A= [2,4,6,8,10],sum=0, B
for(i=0;i<A.length;i++){
sum=sum+A[i]
B++}
console.log("sum="+ sum);
}

 function fun4() {
   val=+prompt("vvedite svoy vozrast","")
   if (val>=1&&val<=13) {
     alert("ты малолетка")
   }
   else {
     if (val>=14&&val<=25) {
       alert("ты студент)))")
     } else {
       if (val>=26&&val<=69) {
         alert("ты старик")
       } else {
         if (val>=70) {
           alert("ты везунчик)))")
         } else {
           if (val<0) {
             alert("положительное надо алло!!!")
           } else {
             alert("ты шо не родился?")
           }

         }
       }
     }
   }
 }

function maxArr() {
  var A=[-2,4,216,-8,10,-114,14,1], max=0
for (var i = 0; i < A.length; i++) {
  if (A[i]>max && A[i]>=-10 && A[i]<=10) {
    max=A[i]
  }
}
console.log(max);
}

function fun6() {
  val = +prompt("vvedite chislo","")
  if (val>=14&&val<=90) {
    alert("chislo v promejutke 14-90")
    console.log("verno");
  }
  else {
    alert("chislo vne intervala")
    console.log("neverno");
  }
}
