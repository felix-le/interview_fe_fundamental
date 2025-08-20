
# **Fixing Memory Problems**

#### **Three Core Symptoms**

1.  **Memory Leak:** Performance gets **progressively worse** over time. A bug is causing the app to hold onto memory it no longer needs.
2.  **Memory Bloat:** Performance is **consistently bad**. The app is using more memory than necessary for its features, often due to inefficient code.
3.  **Frequent Garbage Collection (GC):** Performance is **jerky or pauses frequently**. The app is creating too many short-lived objects, forcing the browser to constantly pause execution to clean up.


## What Is a Detached DOM Node?

A detached DOM node refers to a DOM element that has been removed from the visible DOM tree (for example, via .removeChild() or .remove()), but still remains in memory because JavaScript code retains a reference to it. In other words, even though the element is no longer part of the page structure, some object—like a variable, array, or closure—still holds a pointer to it, preventing garbage collection.

A **detached DOM node** is a DOM element that has been removed from the page's live DOM tree but remains in memory because some JavaScript code still holds a reference to it. This prevents garbage collection from reclaiming the memory, causing a memory leak.

## Why Detached DOM Nodes Cause Memory Leaks

Garbage collection only reclaims memory for objects that are no longer reachable—those with zero references from any root (e.g., the DOM or active JS code). If a detached element is still referenced by JavaScript, it's considered “live” and cannot be collected, even though it's invisible on-screen. This leads to memory accumulation over time, which can degrade application performance and responsiveness.

## **Diagnostic Toolkit: When to Use What**

*   **Step 1: Quick Check (Is there a problem?)**
    *   **Tool:** `Chrome Task Manager`
    *   **What to look for:** Watch the `JavaScript Memory` column (live number in parentheses). If it grows steadily and never goes down, you likely have a **memory leak**.

*   **Step 2: Pinpoint the Symptom**
    *   **To find Frequent GC (Symptom #3):**
        *   **Tool:** `Performance` panel (with the `Memory` checkbox enabled).
        *   **What to look for:** A jagged, "saw-tooth" pattern in the JS Heap graph. This confirms frequent GC.
    *   **To find Memory Bloat (Symptom #2):**
        *   **Tool:** `Memory` panel -> `Allocation instrumentation on timeline`.
        *   **What to look for:** Tall blue bars indicating which functions are allocating a lot of memory.
    *   **To find Memory Leaks (Symptom #1):**
        *   **Tool:** `Memory` panel -> `Heap snapshot`.
        *   **How to use:**
            1.  Take Snapshot 1.
            2.  Perform an action and then undo it (e.g., open/close a modal).
            3.  Take Snapshot 2.
            4.  Compare them. Look for objects with a high "Retained Size" and especially for **(detached)** DOM nodes.

#### **Common Causes & Fixes (The "Why")**

1.  **Detached DOM Nodes:**
    *   **Cause:** A DOM element is removed from the page, but a JavaScript variable still holds a reference to it.
    *   **Fix:** Nullify references to DOM elements once they are no longer needed.

2.  **Zombie Event Listeners (Very common in SPAs/React):**
    *   **Cause:** Adding an event listener (e.g., to `window` or `document`) inside a component but forgetting to remove it when the component unmounts.
    *   **Fix:** In React, always use the **cleanup function of the `useEffect` hook** to call `removeEventListener`.

3.  **Closures:**
    *   **Cause:** An inner function maintains a reference to a large object in its parent's scope, preventing it from being garbage collected.
    *   **Fix:** Be mindful of what variables your closures are holding onto. Break references by setting variables to `null` if they are no longer needed.

### How to Fix It  
To resolve detached-node memory leaks:
- Ensure that any variables or data structures referencing detached elements are cleared or reset when no longer needed.
- Properly remove event listeners attached to elements before deleting the element(s).
- Use structures like `WeakSet` or `WeakMap` that don't prevent garbage collection once references are gone.
- 
### React

When to Use removeEventListener in React

You MUST use it when:

Your component listens to something outside of itself (like the window, document, or a WebSocket).

Why? Because when your component gets destroyed, the window doesn't. It will keep a "ghost" reference to your dead component, causing a memory leak. You must manually tell it to stop listening.

You DON'T need it when:

You are handling events directly on elements inside your component's JSX (like `<button onClick={...}>`).

Why? Because React automatically cleans up the button and its listener together when your component is destroyed. They are part of the same unit.

# Resources
https://developer.chrome.com/docs/devtools/memory-problems/

https://www.youtube.com/watch?v=7A70hBrPL4I&t=8s&ab_channel=ChromeforDevelopers
 