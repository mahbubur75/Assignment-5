# Dev Stack

Dev Stack is a simple web application where users can explore different development technologies and build their own technology stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- Vite
## Features

1. Explore different development technologies with their category, description, difficulty, rating, and badge.
2. Add technologies to a personal "Your Stack" section without allowing duplicate items.
3. Remove individual technologies or clear the entire stack using the "Remove All" button.
4. Toast notifications for adding, removing, duplicate attempts, and removing all technologies.
5. Technologies are loaded dynamica
---

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React components easier to write and understand.

---

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. Props are read-only.

State is data managed inside a component and can change when the user interacts with the application.

---

### 3. What does the useState hook do, and where did you use it in this project?

useState is a React Hook used to create and manage changing data in a component.

In this project, I used useState to store the technology data, selected stack items, and loading state.

---

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is a React Hook used to perform side effects such as fetching data.

I used useEffect in the TechnologySection component to fetch the technology data from the local JSON file when the component loads.

---
