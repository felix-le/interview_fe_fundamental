<!-- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#recursive_functions -->

# Functions

Functions are one of the fundamental building blocks in JavaScript.
It is similar to a procedure. It takes some input and return an output.
there is some obvious relationship between the input and the output.
You must declare it in the scope from which we want to call it.

## Defining functions:

- The name of the functions
- list of parameters to the function, enclosed in the parentheses and separated by commas.

### Function hoisting

JS interpreter hoists the entire function declaration to the top of the current scope. Even you call it before declaring it:

```js
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
// it becomes

// All function declarations are effectively at the top of the scope
function square(n) {
  return n * n;
}

console.log(square(5)); // 25
```

### Recursion

A function can refer to and call itself. It can be referred to either by the function expression or declaration's name, or via any in-scope variable that refers to the function object.
