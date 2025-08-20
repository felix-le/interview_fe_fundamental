<!-- https://www.freecodecamp.org/news/the-complete-guide-to-this-in-javascript/ -->

# The complete Guide to this in JS

In JS, every function has a `this` reference automatically created when you declare it.

> in regular functions, `this` refers to the object that calls the function. In arrow functions, `this` is inherited from the surrounding scope.

## Rule 1:

**Global:**
The default of `this` is reference to **global object** (`window` in the browser, `global` in Node.Js)
In the browser → this is window.

In Node.js → this is {} (empty object) inside a module, or global in the REPL.

```js
function foo() {
  this.a = 2;
}
foo();
console.log(a);

const obj = {
  name: "JS",
  sayName: function () {
    console.log(this.name);
  },
};

const fn = obj.sayName;
fn(); // undefined (or error in strict mode)
```

=> if this function is in strict mode => `this` will be undefined and this.a = 2 ==> Uncaught TypeError exception

## Rule 2:

```js
function foo() {
  this.a = 2;
}

const obj = {
  foo: foo,
};

obj.foo();
console.log(obj.a);
```

=> the `foo()` function is being called with `context` is `object` and `this` reference to bound to `obj`. So when a function is called with a context object, the `this` reference will be bound to this object.

## Rule 3:

`.call`, `.apply` and `.bind` can all be used at the call site to explicitly bind `this`. Using `.bind(this)` is something you may see in quite a lot of React components.

```js
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

const user = { name: "Alice" };

greet.call(user, "Hello"); // Hello, Alice
greet.apply(user, ["Hi"]); // Hi, Alice

const bound = greet.bind(user);
bound("Hey"); // Hey, Alice
```

call and apply → immediately call the function with a custom this.

bind → returns a new function with this permanently bound.

## Rule 4:

```js
const obj = {
  name: "JS",
  sayName: function () {
    console.log(this.name);
  },
};

obj.sayName(); // "JS"
```

## Rule 5:

In constructor functions / classes

```js
function Person(name) {
  this.name = name;
}
const p = new Person("Alice");
console.log(p.name); // "Alice"
```

## Rule 6:

In arrow functions

Arrow functions don’t have their own this.
Instead, they inherit this from their surrounding scope.

```js
const obj = {
  name: "JS",
  say: function () {
    const arrow = () => {
      console.log(this.name);
    };
    arrow();
  },
};
obj.say(); // "JS"
```

👉 If you used a normal function instead of an arrow, this could change, but arrow functions keep the outer this.
