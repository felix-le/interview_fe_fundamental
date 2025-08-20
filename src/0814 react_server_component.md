### **React Server Components**

React Server Components (RSC) were stabilized in **React 18** and are a core feature of frameworks like **Next.js 13**. They run **exclusively on the server** to render a static UI description, which is sent to the browser **without any of their own JavaScript**. This drastically reduces the initial bundle size and improves load times.

The main trade-off is that Server Components are stateless and cannot handle user interaction. The modern pattern is to use Server Components for the static "skeleton" of a page and then import interactive **Client Components** (marked with `"use client";`) to create **"Islands of Interactivity"** like buttons and forms.

#### **Server Components vs. Client Components**

| Feature | Server Components (Default) | Client Components (`"use client";`) |
| :--- | :--- | :--- |
| **Environment** | Server-only | Renders on server (SSR), then runs on the client |
| **State & Lifecycle** | ❌ **Cannot** use `useState`, `useEffect` | ✅ **Can** use `useState`, `useEffect` |
| **Interactivity** | ❌ **Cannot** use event handlers (`onClick`) | ✅ **Can** use event handlers |
| **Backend Access** | ✅ **Can** directly access databases, filesystems | ❌ **Cannot** (must use `fetch`) |
| **JS Sent to Client**| ❌ **No** | ✅ **Yes** |
| **When to Use** | Fetching data, displaying static content. | Any UI that needs user interaction. |

Resources
https://react.dev/reference/rsc/server-components
