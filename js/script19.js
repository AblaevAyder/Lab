function ex1() {
  function Archiver() {
var temperature = null;
var archive = {};
Object.defineProperty(this,'temperature', {
get() {
console.log('get!');
return temperature;
},
set(value) {
temperature = value;
archive.pop({ val: temperature });
}
});
this.getArchive = function() { return archive; };
}
var arc = Archiver();
arc.temperature; // &#39;get!&#39;
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
}
