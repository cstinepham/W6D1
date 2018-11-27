function sum(...args) {
  let sum = 0;
  args.forEach((el) => { 
    sum += el;
  });
  return sum;
}

Function.prototype.myBind = function (context, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(context, bindArgs.concat(callArgs));
  };
};

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }

}

function meow() {
  console.log(`${this.name} meows!`);
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// pavlov.myBind(meow());
// pavlov.meow();

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

function curriedSum(numArgs) {
  let numbers = [];
  let maxArgs = numArgs;
  return function _curriedSum(arg) {
    numbers.push(arg);
    if (numbers.length < maxArgs) {
      return _curriedSum;
    } else {
      return numbers.reduce((a, b) => (a + b));
    }
  };
}

Function.prototype.myCurry = function (numArgs) {
  let args = [];
  let thing = this;
  return function _this(arg) {
    args.push(arg);
    if (args.length < numArgs) {
      return _this;
    } else {
      return thing.apply(null, [args]);
    }
  };
};