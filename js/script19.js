function ex1() {
  function Archiver() {
var temperature = null;
this.archive = [];
Object.defineProperty(this,'temperature', {
get() {
console.log('get!');
return temperature;
},
set(value) {
temperature = value;
this.archive.push({ val: temperature });
}
});
this.getArchive = function() { return this.archive; };
}
var arc = new   Archiver();
arc.temperature; // get!
arc.temperature = 11;
arc.temperature = 13;
console.log(arc.getArchive()); // [{ val: 11 }, { val: 13 }]
}

function ex2() {
  function User(fullName){
           firstName = fullName.split(' ')[0];
           lastName = fullName.split(' ')[1];
           Object.defineProperty(this, "firstName", {
             get() {
               return firstName;
             },
             set(value) {
               firstName = value;
             }
           })
           Object.defineProperty(this, "lastName", {
             get() {
               return lastName;
             },
             set(value) {
               lastName = value;
             }
           })
         }
         var name = prompt("vvedite imya")
         var vasya = new User(name);
         console.log(vasya.firstName);
          console.log(vasya.lastName);
         vasya.firstName = "Василий";
         vasya.lastName = "сИДОРОВ";
         console.log(vasya.firstName);
         console.log(vasya.lastName);
}

function ex3() {
  const test_object = {};
Object.defineProperty(test_object, 'property1', {
value: 42,
writable: false
});
test_object.property1 = 77;
console.log(test_object.property1);
}

function ex4() {
  var o = {};
  Object.defineProperty(o, 'a', {
  value: 1,
  enumerable: true
  });
  Object.defineProperty(o, 'b', {
  value: 2,
  enumerable: false
  });
  Object.defineProperty(o, 'c', {
  value: 3
  });
  o.d = 4;
  for (var key in o) {
  console.log(key);
}
}

function ex5() {
  var o = {};
  Object.defineProperty(o, 'a', {
  get() { return 1; },
  configurable: false
  });
  Object.defineProperty(o, 'a', {
  configurable: true
  });
  Object.defineProperty(o, 'a', {
  enumerable: true
  });
}
