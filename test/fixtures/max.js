
(function() {
  return alert("hello world");
});

function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.toString = function(){
  return '<User name=' + this.name + '>';
}