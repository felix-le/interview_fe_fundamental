### **Interview Prep**

#### **Process**

### 1. Can you walk me through your process when you receive a new design file from a UI/UX designer?

5 steps:

1. Break down the UI into a component tree understand the user flow
2. Build a static version with React
3. Pass Props instead of state
4. Implement state with principle "lift up state", group component states with `single source truth`
5. Add callback functions as props from parents to children components

---

### 2. Imagine a Product Manager gives you a new feature requirement that seems technically challenging or ambiguous. What is your process?

5 steps:

1. Understand by listening and taking notes. Confirm the requirements by own words.
2. Identify the technical challenges and edge cases (empty, nullability etc...)
3. Follow up: communicate with PM daily to catch up
4. Break down the requirements into small technical tasks that can be easier to estimate time and effort.
5. Keep in touch with all team member

---

### 3. How do you collaborate with backend developers to integrate a new API? What do you consider essential for a good API contract?

three main stages:

- early state: share the requirements documentation.
- work with BE developer for `contract API`
  - Identify Endpoints & HTTP, use correct verbs (POST, PUT,GET, DELETE)
  - Request shapes: JSON body structure, URL params, query params
  - Response shapes: fields, data type for each field, array object shape
  - Documentation
  - error structure format: error
- Integration: use Mock API with JSON, update with BE and integration with real API.

---

### 4. What is your philosophy on code reviews?

Three main stage:

1. understand: Read carefully pull description, goal, overall logic.
2. Do a checklist:
   1. logic: correct, edge cases, avoid bugs
   2. Architecture: follows single responsibility, fits with existing architecture?
   3. Maintainable/readable: easy to read for new dev?
   4. Testing: unit test for core functions?
   5. style: Follow with ESLINT, prettier?
3. Feedback: based on kind, understand, suggestions and highlight good work.

---

### 5. How do you handle receiving critical feedback on your own code?

- listen without defending
- analyze feedback
- resolve issues as needed
- Take lesson and create a process to avoid it.

---

### 6. Handling a Critical Production Bug

4 steps:

- stop bleeding: apply hotfix/workaround
- find root cause: quicly
- fix and deploy
- learn from the issue, add test then share with team.

---

#### **React**

### 7. What is React?

React created by Facebook. It is a library for developers can build UI.
It is like LEGO brick.
every components are reuseable. each component has its style and logic.
By doing that, the application is consistent and easy to understand.

The highlight is we can update style for a thing cross application at 1 place without breaking the UI of the application

---

### 8. What is the Virtual DOM and how does reconciliation work?

- VDOM is a in-memory of real DOM
- when props/state changes --> React builds a new VDOM tree.
- It diffs with the old tree (reconciliation)
- Update only the changed parts in the real DOM

---

### 9. What is the purpose of keys in React lists?

The keys help React can identify which one is updated. without it, the application might have issue with performance.

### 10. Controlled vs Uncontrolled components

React handle controlled -> easy to predict values,
Uncontrolled -> DOM handle the state -> simpler but hard to predicable.

---

### 11. Props

Read-only and pass from parent to children.
Need to update by callback function from parents

---

### 12. Lifecycle of a functional component (Hooks)

- Mount: useState([])
- update: state changes -> re-render - dom update -> run useEffect with deps
- Unmount: clean the side effect.

---

### 13. Cleanup in useEffect

prevent the memory leak that might hurt the performance.
removeEventListener

---

### 14. Refs

Direct access to DOM or React elements.
use for focus,text selection, ....
Avoid for UI updates

---

### 15. useRef vs useState

useState: store state + triggers re-render when changed
useRef: keeps a value that doesn’t trigger re-render.

---

### 16. Context API

- provide a way to access state cross deeply nested components without props drilling.

---

### 17. Fragments

group multiple components without extra DOM

---

### 18. Memoization in React

useMemo, useCallBack, memo

---

#### **Redux**

### 19. Can you explain the basic data flow in Redux?

UI -> Action -> middleware (if needed) -> reducer -> store - UI update

---

### 20. What is a reducer?

pure function
without modifying the original state
return current state if action is unknow

---

### 21. What problems does Redux Toolkit solve?

less repeated code
safe state update
handy built-in helper: createSlice, createAsyncThunk
clear structure

---

#### **SSR**

### 22. What is hydration in SSR?

- server send HTML
- Hydration: React attaches event listeners and makes it interactive on client.
- In React 18: some components will run on server. they cannot use react hooks: useState ...
- for controlling update state: we will have client render with 'use client' on the top of files

---

#### **Performance**

### 23. How can you improve performance of an application?

largest content paint
Interaction to Next Paint
Cumulative Layout Shift

- **Backend:** apply Web Vitals (LCP, INP, CLS), index DB, add caching, scale servers when needed
- **FE**: offload heavy tasks with web worker; on react 18's `useTransition` for non-urgent updates, lazy load and code splitting; improve algorithm efficiency
- **API Layer**: use faster third party APIs if needed.
