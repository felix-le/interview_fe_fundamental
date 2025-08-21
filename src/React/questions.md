### **React Interview Questions (Comprehensive)**

#### **Part 1: Process, Collaboration & Workflow**

1.  **(From Design to Code):** Can you walk me through your process when you receive a new design file from a UI/UX designer?
2.  **(From Requirements to Implementation):** Imagine a Product Manager gives you a new feature requirement that seems technically challenging or ambiguous. What is your process for handling this from start to finish?
3.  **(Collaboration with Backend):** How do you collaborate with backend developers to integrate a new API? What do you consider essential for a good "API contract"?
4.  **(Code Reviews - Giving Feedback):** What is your philosophy on code reviews? What are the key things you look for when reviewing a teammate's pull request?
5.  **(Code Reviews - Receiving Feedback):** How do you handle receiving critical feedback on your own code?
6.  **(Deployment Process):** Can you walk me through the typical steps from when your feature branch is merged to when it's live for users in production?
7.  **(Handling Production Issues):** Describe a time you had to deal with a critical bug that was found in production. What was your process for debugging and deploying a hotfix?
8.  **(Working with Stakeholders):** How do you ensure that the technical solutions you're building are aligned with the expectations of non-technical stakeholders?

#### **Part 2: React Core Concepts**

9.  What is the Virtual DOM and how does React's reconciliation process work?
10. Explain the concept of "lifting state up" and why it's a fundamental pattern in React.
11. What is the purpose of keys in React lists and what happens if you don't use them or use the array index as a key?
12. What is the difference between a controlled and an uncontrolled component? What are the pros and cons of each?
13. What are props? Can you modify props within a child component?
14. Explain the full lifecycle of a functional component using Hooks (`useState`, `useEffect`).
15. Describe the `useEffect` dependency array in detail. What are the differences between no dependency array, an empty array `[]`, and an array with values `[a, b]`?
16. How do you properly handle cleanup for side effects in `useEffect`? Can you give an example?
17. What are refs and what are their primary use cases? When should you avoid using them?
18. What is the difference between `useRef` and `useState`?
19. What is the Context API and what problem does it solve?
20. What is JSX? Explain how it gets transformed before being rendered in the browser.
21. What are Fragments and why are they useful?
22. How does error handling work in React? Have you used Error Boundaries?

#### **Part 3: State Management**

23. Can you explain the basic data flow in Redux?
24. What is a "reducer" and what are the rules it must follow (i.e., being a pure function)?
25. What problems does Redux Toolkit solve compared to "plain" Redux?
26. What is the purpose of middleware in Redux? Can you give an example like Redux Thunk?
27. How would you handle asynchronous API calls in a Redux application?
28. What are the trade-offs between using the Context API and Redux for global state management?
29. Have you used other state management libraries like Zustand or Jotai? How do they compare to Redux?
30. How does the `useReducer` hook work? When would you use it over `useState`?

#### **Part 4: Performance Optimization**

31. What is "memoization" in React?
32. Explain the purpose of `React.memo` and how it works.
33. What is the difference between `useMemo` and `useCallback`? Provide a clear example for each.
34. When should you _not_ use `useMemo` and `useCallback`? What is the cost of using them?
35. What is code-splitting and how do you implement it in a React application using `React.lazy` and `Suspense`?
36. How would you use the React DevTools Profiler to identify and fix a performance bottleneck?
37. What is "hydration" in the context of Server-Side Rendering (SSR) and how does it relate to performance?
38. How can you prevent unnecessary re-renders of child components when a parent component's state changes?

#### **Part 5: Advanced Patterns & Architecture**

39. What are custom Hooks? Can you give an example of a custom Hook you have written or would write?
40. What are Higher-Order Components (HOCs) and Render Props? Why are custom Hooks generally preferred now?
41. What are React Server Components (RSC)? How are they different from components in a typical SSR setup?
42. How do you handle forms and validation in a large React application?
43. What is your approach to structuring a large React application? (e.g., folder structure, component organization).
44. How do you manage application-wide configuration or feature flags?
45. What are portals in React and what is a good use case for them?
46. What is the difference between imperative and declarative code, and how does this relate to React?
47. If you were to design a reusable and accessible Data Table component, what are the key props and features you would consider?
