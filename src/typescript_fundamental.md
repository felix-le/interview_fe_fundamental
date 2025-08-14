 

### **Question 1: API Response Validation and Type Guarding**

"You are working with a third-party API that returns user data. The API is unreliable and sometimes sends malformed data or data that doesn't match your application's `User` interface. Your task is to write a type-safe function to handle the API response.

In a new file, first define a `User` interface:
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
```
Then, write a **type guard** function `isUser(data: unknown): data is User`. This function should take a value of type `unknown` and return `true` only if the value is an object that strictly conforms to the `User` interface. Finally, show how you would use this type guard to safely process a raw API response."

---

### **Question 2: Asynchronous Component State Modeling**

"You need to model the state for a React (or any modern framework) component that fetches data. The component can be in one of three states: `'loading'`, `'success'` (which includes the fetched data), or `'error'` (which includes an error object).

Your task is to use a **discriminated union** to create a type called `FetchState<T>` that is generic over the data type `T`. Then, write a function `handleState(state: FetchState<User>)` that logs a different message for each state. Ensure your implementation uses an **exhaustive check** so that if a new state (e.g., `'idle'`) is added in the future, TypeScript will produce a compile-time error."

---

### **Question 3: Type-Safe Generic Utility Function**

"In large codebases, we often need reusable utility functions. Your task is to write a generic function called `pluck`.

This function, `pluck<T, K extends keyof T>(items: T[], key: K): T[K][]`, should take an array of objects (`items`) and a key (`key`) that exists on those objects. It should return a new array containing only the values from the specified key.

Demonstrate how it works with an array of `User` objects. Most importantly, show that your implementation is fully type-safe, meaning TypeScript will throw a compile-time error if you try to `pluck` a key that does not exist on the objects in the array."