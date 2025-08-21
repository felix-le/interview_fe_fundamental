# **The Main Target of Thinking in React**

To create components that are easier to maintain, predict, and scale.

### **5 Steps:**

1.  **Step 1: Break the UI into a Component Hierarchy**
    *   Apply the **Single Responsibility Principle**.

2.  **Step 2: Build a Static Version in React (Stateless)**
    *   This creates a **separation of concerns**.
    *   *"I start by building a static version to establish the one-way data flow using props. This allows me to focus solely on the UI structure before adding any complexity with state."*

3.  **Step 3: Find The Minimal but Complete Representation of UI State**
    *   Is it passed from a parent via props? (If yes -> Not state)
    *   Does it remain unchanged over time? (If yes -> Not state)
    *   Can you calculate it from other state or props? (If yes -> Not state)

4.  **Step 4: Identify Where Your State Should Live**
    *   Use the principle: **"Lift state up."**
    *   *"To determine where state should live, I identify all components that render something based on that state. Then I find their closest common parent component and place the state there. This follows the principle of a single source of truth."*

5.  **Step 5: Add Inverse Data Flow**
    *   We can pass a **callback function** as a prop to a child component. By doing this, the logic for updating the state remains in the parent component instead of its child.

### **Interview Questions:**

**Q1: "Can you walk me through your process for building a React component from a design mockup?"**

"I apply the 'Thinking in React' methodology. First, I break down the UI into a **component hierarchy**, following the **single responsibility principle**. Then, I build a **static version** using only props to handle the **one-way data flow**. After that, I identify the **minimal, complete state** needed for interactivity. Next, I **lift that state up** to the closest common parent of all components that need it. Finally, I add the **inverse data flow** by passing down callback functions as props, which allows child components to update the parent's state."

**Q2: "How do you decide where to place state in your application?"**

"My rule of thumb is to start by keeping state as local as possible. If multiple components need access to the same state, I **lift it up to their closest common ancestor**. By doing that, we can achieve a **predictable one-way data flow** and maintain a **single source of truth** for that piece of data, which makes the application much easier to debug."

**Q3: "Why is building a static version first important?"**

"By doing that, we can focus **entirely on building the UI structure and component composition** correctly without worrying about state and interactivity. This makes it much faster to build the initial layout and easier to pinpoint issues later when we add the logic."

**Q4: "So, what is React? Can you explain it to someone non-technical?"**

"Overall, React is a popular JavaScript library created by Facebook. Its main job is to help developers build user interfaces—everything you see and interact with on a webpage.

To make it easier to understand, we can think about building something with **LEGO bricks**.

Instead of building a webpage as one giant, single piece, React lets us create small, reusable 'bricks' called **components**. For example, we can build a 'Button' component once, with its own logic and style. Then, we can reuse that exact same button anywhere on the site, just like using the same LEGO brick over and over. As a result, development is much faster, and the website has a **consistent look and feel**.

The magic is how React handles updates. Imagine you want to change just one thing in your LEGO house. Instead of tearing the whole house down and rebuilding it, React is smart enough to find that one specific brick and **swap only that piece**. This makes the website feel incredibly **fast and responsive** for the user.

So, in short, React helps us build complex user interfaces from simple, reusable pieces, which leads to **faster development** and a much **better user experience**."

**Resource:**
https://react.dev/learn/thinking-in-react