### **TypeScript: The Basics**

#### **1. What is TypeScript?**

- **Core Definition:** TypeScript is a **static type-checker** for JavaScript. Its primary purpose is to describe the shapes and behaviors of our values _before_ we run our code.
- **Main Goal:** It helps us catch bugs and errors during development (at compile time) - before running the code.

#### **2. How TypeScript Prevents Common Bugs**

TypeScript excels at preventing several categories of common JavaScript errors:

##### **a. Non-exception Failures (Logic Errors from `undefined`)**

This happens when you try to access a property that doesn't exist, resulting in `undefined`, which can cause unexpected behavior later in your code.

```ts
const user = {
  name: "a",
  age: 26,
};

// TypeScript Error: Property 'location' does not exist on type '{ name: string; age: number; }'.
user.location;
```

##### **b. Typos in Method or Property Names**

JavaScript would fail silently or throw an error at runtime. TypeScript catches these immediately.

```ts
const announcement = "Hello World!";

// How quickly can you spot the typos?
announcement.toLocaleLowercase(); // TS Error: Property 'toLocaleLowercase' does not exist...
announcement.toLocalLowerCase(); // TS Error: Property 'toLocalLowerCase' does not exist...

// We probably meant to write this...
announcement.toLocaleLowerCase(); // Correct
```

##### **c. Uncalled Functions**

A classic bug is forgetting the parentheses `()` when calling a function, leading to incorrect comparisons.

```ts
function flipCoin() {
  // Meant to be Math.random()
  // TS Error: Operator '<' cannot be applied to types '() => number' and 'number'.
  return Math.random < 0.5;
}
```

##### **d. Basic Logic Errors**

TypeScript can analyze your code flow and detect impossible conditions.

```ts
const value = Math.random() < 0.5 ? "a" : "b";

if (value !== "a") {
  // This block runs if value is "b"
} else if (value === "b") {
  // TS Error: This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
  // TypeScript knows that if the first `if` condition is false, `value` MUST be "a",
  // so this `else if` condition can never be true.
}
```

#### **3. Using `tsc`, the TypeScript Compiler**

- **Installation:**
  ```terminal
  npm install -g typescript
  ```
- **Compilation Process:**
  1.  Write your code in a `.ts` file.
      ```ts
      // hello.ts
      console.log("Hello world!");
      ```
  2.  Run the compiler.
      ```terminal
      tsc hello.ts
      ```
  3.  This command generates a corresponding `.js` file (`hello.js`) that can be run in any JavaScript environment.

#### **4. Explicit Types (Type Annotations)**

- The most fundamental feature of TypeScript is the ability to add **type annotations** to variables, function parameters, and return values. This explicitly tells TypeScript what type of value to expect.
- You can find more details on how to annotate functions in the official documentation:
  - **Link:** https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#functions
