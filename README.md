# React Interview Q&A

---

## 1. What is JSX, and why is it used?

**Answer:**  
JSX stands for **JavaScript XML**. It allows developers to write HTML-like syntax inside JavaScript, which makes UI creation more intuitive. JSX is then compiled into `React.createElement()` calls under the hood.  

✅ Example:
```jsx
const element = <h1>Hello, World!</h1>;

without jsx

const element = React.createElement("h1", null, "Hello, World!");

```
## 2. What is the difference between State and Props?

**Answer:**  
i. State

Managed within a component (internal).Mutable (can be updated using setState or useState).Used for dynamic, interactive data.

ii. Props

Passed from parent to child (external).
Immutable (read-only).Used to make components reusable. 

✅ Example:
```jsx
function Child({ message }) {
  return <p>{message}</p>;
}

function Parent() {
  return <Child message="Hello from Parent!" />;
}

```
## 3. What is the useState hook, and how does it work?

**Answer:**  
useState is a React Hook that allows functional components to hold and update state.It returns two values:

i.The state variable.

ii.A function to update it.

✅ Example:
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

## 4. How can you share state between components in React?

**Answer:**  
i. Lift state up to the nearest common parent and pass via props.

ii. Use Context API for global state.

iii. Use state management libraries (Redux, Zustand, etc.) for large apps

✅ Example:
```jsx
function Child({ value, setValue }) {
  return (
    <button onClick={() => setValue(value + 1)}>
      Increase in Child (Current: {value})
    </button>
  );
}

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count in Parent: {count}</p>
      <Child value={count} setValue={setCount} />
    </div>
  );
}
```

## 5. How is event handling done in React?

**Answer:**  
i. Event names use camelCase (e.g., onClick, onChange).

ii. Handlers are passed as functions.

iii. React uses Synthetic Events for cross-browser support.

✅ Example:
```jsx
function Button() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}




