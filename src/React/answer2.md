### **Interview Prep**

#### **Process**

### 1. Can you walk me through your process when you receive a new design file from a UI/UX designer?

general 5 steps:

1. understand: I will break it into a component tree, understand the flow of user.
2. build static version in React
3. try to pass props instead of states
4. Implement state with principle `lift state up`, we will apply `single source of truth`
5. callback functions pass to children components.

---

### 2. Imagine a Product Manager gives you a new feature requirement that seems technically challenging or ambiguous. What is your process?

4 steps:

1. understand: listen, take notes and rephrase to confirm the requirements
2. Identify the technical challenges and edge cases (empty, nullability..)
3. Break complex tasks into smaller and easy to estimate time.
4. Share with team, work together and communicate with PM daily.

---

### 3. How do you collaborate with backend developers to integrate a new API? What do you consider essential for a good API contract?

1. early steps: share all documents, requirements
2. Work on API contract:
   1. Endpoints and HTTP request, use correct verbs (PUT, GET, POST, DELETE)
   2. request shape: body structure shape, params, query
   3. response shape: body response structure, fields, data of each field, response code.
   4. Error structure: error code, format
   5. Documentation: share via postman
3. Integration: use Mock API in JSON format, keep in touch with BE developer, update on time.

---

### 4. What is your philosophy on code reviews?

a few steps:

- understand the PR: read the description, clear purpose of the request.
- checklist:
  - Logic: check the logic might meet the requirements? can do it simpler?
  - Architecture: check it fits with the existing architecture?
  - Maintainable/Readable: is it easy to read for a new dev?
  - Test: check the unit test for the core function.
  - Style: check the style with ESLINT, prettier
- Feedback: based on kind, suggestions, prise for the good work.

---

### 5. How do you handle receiving critical feedback on your own code?

- listen without defending
- analyze the feedback
- resolve the issue if needed
- write a process to avoid it in the feature
- share it with team

---

### 6. Handling a Critical Production Bug

- stop bleeding: hotfix
- find the root of cause: quickly
- Resolve and deploy
- Review and have a lesson then share it with team to improve the process.

---

#### **React**

### 7. What is React?

React is created by Facebook. it is a interface framework library. Developer can use it to build UI.
It is similar to LEGO brick.
For React, bricks are components. each component holds its logic and style cross the application. By doing that, the application is consistent.
The magic thing is that when you want to update a brick, instead of breaking down whole application, you can only change the component in one place --> all update.

---

### 8. What is the Virtual DOM and how does reconciliation work?

- React work on VDOM layer follow up the real VDOM
- When props/state changes -> react build a new VDOM
- it diffs the old VDOM tree.
- Update with only the component needed.

---

### 9. What is the purpose of keys in React lists?

to help React identify the correct DOM have been updated.
Without it, the application will have some bugs and reduce the performance.

---

### 10. Controlled vs Uncontrolled components

React keep controlled component and make it easier to predict
DOM will keep the uncontrolled -> simpler but hard to predict

---

### 11. Props

an object pass from parents to children.

You cannot change the props, you need to use callback function in a child component to update the props from its parents

---

### 12. Lifecycle of a functional component (Hooks)

Mount: render the DOM, useState([])
Update: re-render the correct DOM, based on dependences
Unmount: removeEventListener. if not, will face the performance down.

---

### 13. Cleanup in useEffect

we use removeEventListener to remove it.

---

### 14. Refs

directly to DOM, use to focus, text selection ....

---

### 15. useRef vs useState

useRef refer to DOM, element when we update it current -> Will not re-render
useState -> will re-render when update variables in dependency

---

### 16. Context API

A method, store will use to pass props from a group of component without props drilling

---

### 17. Fragments

React.Fragments -> group multiple components without creating a new Node on UI.

---

### 18. Memoization in React

useMemo, memo, useCallback

useMemo to remember the values of function when re-render
useCallback to remember the function when re-render
memo to prevent re-render unnecessary (only render when the props change)

---

#### **Redux**

### 19. Can you explain the basic data flow in Redux?

Action -> middleware -> reducer -> store -> UI update

---

### 20. What is a reducer?

pure function without modify the original state and return current state if action is unknown

---

### 21. What problems does Redux Toolkit solve?

clear code, shorter
build-in tools: createSlice, createAsyncThunk

---

#### **SSR**

### 22. What is hydration in SSR?

In react 18+: we will have server side render. in this component, the code will be rendered on server. Users cannot update or integrate with the component.
We will create component on client side to handle update state -> islands components
hydration: user cannot change state on the SSR files.

---

#### **Performance**

### 23. How can you improve performance of an application?

On the backend: based on web vitals, we need to improve latency by index in the database to improve the query time, add caching, scale servers if needed
On Front end: use React Hooks to handle and improve the performance by preventing unnecessary re-render. Replace algorithms with O(n^2) by O(n). For heavy tasks, we will use `web worker`.
API layer: we will use fast api from third parties.
