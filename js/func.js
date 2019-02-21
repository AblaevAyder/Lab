function obm(w, l ,h) {
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

((w,h,l)=>V = w*h*l console.log(V))(2,3,4)
