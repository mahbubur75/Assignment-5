 # Dev Stack

Dev Stack is a web application that helps users explore different development technologies and build their own technology stack. Users can view technology details, add technologies to their stack, and remove them whenever they want.

## Technologies Used

- React.js
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
5. Technologies are loaded dynamically from a JSON file with a loading state.

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

### 5. Why does every item in a .map() list need a unique key prop?

React uses the key prop to identify each item in a list. A unique key helps React understand which item has changed, been added, or removed.

In this project, I used the technology id as the key.

---

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI elements depending on a condition.

In this project, the "Your Stack" section shows an empty message when there are no selected technologies. When technologies are added, it shows the selected items instead.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child component using props.

In this project, TechnologySection passes technology data and functions to TechnologyCard through props.

The child component can send information back to the parent by calling a function that was passed through props. For example, TechnologyCard calls addToStack() when the user clicks the "Add to Stack" button.

---

## Project Purpose

The main purpose of this project is to practice React concepts such as components, props, state management, hooks, JSON data fetching, conditional rendering, and user interactions.

## Author

Dev Stack Project