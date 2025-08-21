# Interview Prep

## Process

### Can you walk me through your process when you receive a new design file from a UI/UX designer?

I have 5 steps:

1. Break the UI into a component tree and understand the full user flow.
2. Build a static version in React.
3. Prefer **props over state** at first.
4. When adding state, apply **“lift state up”** and keep a **single source of truth**.
5. Add **inverse data flow** using callback functions passed as props to children.

---

### Imagine a Product Manager gives you a new feature requirement that seems technically challenging or ambiguous. What is your process?

I have 5 steps:

1. Understand requirements: take notes, rephrase them back to confirm.
2. Identify technical challenges (data, edge cases like empty/error/invalid states).
3. Follow up: communicate my plan to explore solutions for 1–2 days.
4. Break down the solution into smaller technical tasks and estimate.
5. Communicate updates and findings clearly to the team.

---

### How do you collaborate with backend developers to integrate a new API? What do you consider essential for a good API contract?

1. **Early alignment** – share requirements early, define the API contract together.
2. **API Contract** includes:
   5 things

   - Endpoints & HTTP methods (clear paths, correct verbs).
   - Request shape: JSON body structure, URL params, query params.
   - Response shape: status codes, field types, nullability, array object shape.
   - Error responses: consistent structure with error codes.
   - Documentation: tools like Postman.

3. **Development & integration** – mock APIs with JSON, stay update with BE dev, then integrate with real API.

---

### What is your philosophy on code reviews?

1. Understand the PR: description, goal, overall logic.
2. Review checklist:

   - **Logic** – correct, handles edge cases, avoids bugs.
   - **Design/Architecture** – follows single responsibility, fits existing structure.
   - **Maintainability/Readability** – easy for new devs.
   - **Performance/Scalability** – avoid O(n²), unnecessary re-renders, async handled well.
   - **Testing** – unit tests for core logic and edge cases.
   - **Style** – follows ESLint/Prettier conventions.

3. Feedback: kind, specific, constructive, and also highlight good work.

---

### How do you handle receiving critical feedback on your own code?

1. Listen without defending.
2. Analyze the feedback.
3. Resolve issues as needed.
4. let it as a chance growth and learning.

---

### Handling a Critical Production Bug

1. **Stop the bleeding** – apply hotfix/workaround.
2. **Find root cause** quickly.
3. **Fix and deploy**.
4. **Learn** – add tests, improve monitoring, share lessons.

---

## React

### What is React?

- Like LEGO bricks: reusable UI components.
- Reuse ensures consistent style & logic across the app.
- Updating is in one place — change once, update everywhere.

---

### What is the Virtual DOM and how does reconciliation work?

- Virtual DOM is an in-memory representation of the real DOM.
- On state/prop changes, React builds a new VDOM tree.
- It diffs with the old tree (reconciliation).
- Updates only the changed parts in the real DOM.

---

### What is the purpose of keys in React lists?

- Keys help React identify which items changed, added, or removed.
- Without keys (or with array indexes), React may mis-reuse DOM nodes → bugs & performance issues.

---

### Controlled vs Uncontrolled components

- **Controlled:** state in React → predictable, easy validation.
- **Uncontrolled:** state in DOM → simpler, but less predictable.

---

### Props

- Read-only inputs passed from parent → child.
- Cannot be modified in the child; use state or parent callbacks instead.

---

### Lifecycle of a functional component (Hooks)

- **Mount**: run `useState` defaults, DOM updates, then `useEffect([])`.
- **Update**: state/props change → re-render → DOM update → run effect with deps.
- **Unmount**: cleanup side effects (e.g., remove listeners).

---

### Cleanup in useEffect

- Return a cleanup function (e.g., `clearInterval`, `removeEventListener`).

---

### Refs

- Direct access to DOM elements or React elements.
- Use for: focus, text selection, media playback, animations, 3rd-party libs.
- Avoid for UI updates — use state instead.

---

### useRef vs useState

- **useState**: stores state + triggers re-render when changed.
- **useRef**: stores mutable value across renders, no re-render.

---

### Context API

- Provides a way to share state across deeply nested components without prop drilling.

---

### Fragments

- `<></>` or `<React.Fragment>` lets you return multiple elements without extra DOM nodes.

---

### Memoization in React

- `React.memo`: skip re-render if props don’t change.
- `useMemo`: cache expensive computations.
- `useCallback`: cache function references.
- Use only when re-renders are actually expensive.

---

## Redux

### Can you explain the basic data flow in Redux?

**Action → Dispatch → Middleware → Reducer → Store → UI**

- **Action** – describes what happened.
- **Middleware** – handles async or non-object actions.
- **Reducer** – pure function returns new state.
- **Store** – holds state, notifies UI.
- **UI** – re-renders on state change.

---

### What is a reducer?

- Pure function.
- without modifying the original state.
- Return current state if action is unknown.

---

### What problems does Redux Toolkit solve?

- Less repeated code (shorter, cleaner)
- Safe state updates (no breaking the old data)
- Handy built-in helpers: createSlice, createAsyncThunk
- Clear structure, easy to maintain

---

## SSR

### What is hydration in SSR?

- Server sends HTML.
- Hydration: React attaches event listeners and makes it interactive on client.
- In React 18+: some components render only on the server (server components).
- For client-side interactivity, mark components with `"use client"` (islands).

---

## Performance

### How can you improve performance of an application?

- **Backend:** monitor Web Vitals (LCP, INP, CLS), optimize database queries with indexes, add caching, and scale servers when needed.
- **Frontend:** prevent unnecessary re-renders with `React.memo`, `useCallback`, and `useMemo`; offload heavy tasks with Web Workers; use React 18’s `useTransition` for non-urgent updates; optimize assets with lazy loading and code splitting; improve algorithm efficiency (e.g., replace O(n²) with O(n) or O(log n)).
- **API Layer:** use faster or more reliable third-party APIs when appropriate.
