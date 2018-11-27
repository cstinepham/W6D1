// function Surrogate() {}
// Surrogate.prototype = SuperClass.prototype;
// SubClass.prototype = new Surrogate();
// SubClass.prototype.constructor = SubClass;

Function.prototype.inherits = function (superClass) {
  function Surrogate() {}
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
  
};

function Cat(color) {
  this.color = color;
  this.meow = function () {
    console.log('meow');
  };
}

Cat.prototype.meow2 = function() {
  console.log('hi');
}

function Kitten() {
}

Kitten.inherits(Cat);

let garfield = new Kitten();
let ralph = new Cat();
garfield.meow2();