# Project Overview

## Installation and setup
- Install a vite project in frontend named folder with the command  `npm i vite@latest .` .
- Ater that I delete unneccesary code snipped and files like SVG pictures counter code snipped App.css and main.css etc. 
Create neccessary folders (**api**, **components**, **context**) and files (**todoService.js**, **TodoItem.jsx**, **TodoContext.js**).
- Then I installed axios and setup the proxy server in viteconfig.js .
- After that I delete the unwanted css code snipped from App.css.

## File structure 
frontend/  
├── node_modules/     
├── public/   
│   └── favicon.png   
├── src/   
│   ├── api/    
│   │ └── todoService.js  
│   ├── components/   
│   │  └── TodoItem.jsx  
│   ├── context/  
│   │  └── TodoContext.jsx   
│   ├── App.css  
│   ├── App.jsx  
│   └── main.jsx    
├── .gitignore  
├── eslint.config.js  
├── index.html  
├── package-lock.json  
├── package.json  
├── README.md  
└── viteconfig.js

## main.jsx
- I continued my project with default main.jsx code snipped (Given by vite framework).


## App.jsx 
- I use an auto-import extension for importing the modules automatically.
- Then I import the **necessary modules and files** (`useState`, `useTodos`, `TodoItem`, and `App.css`).
- Inside the `App` component, I use the `useTodos` hook to get the `todos` list and the `addTodo` function from my context.
- I created two local states using `useState`:
    - `newTask`: To store the text of the task I am currently typing.
    - `searchQuery`: To store the text used for filtering tasks.
- I implemented a `handleSubmit` function to handle adding new tasks:
    - It prevents the default form submission (page refresh).
    - It uses a `try...catch` block to handle errors during the API call or state update.
    - It clears the input field once the task is successfully added.
- I created a `filteredTodos` variable that automatically filters the tasks based on the `searchQuery` typed by the user.
- In the **UI (Return statement)**:
    - I added a **Search Container** so users can find specific tasks easily.
    - I set up a **Todo Form** to capture new entries.
    - I used a **Ternary Operator** to check if there are tasks to show. If yes, it maps through `filteredTodos` to render `TodoItem` components; otherwise, it shows a "No tasks found" message.


## todoService.js
- I imported **axios** to handle my HTTP requests to the backend.
- I defined a `Backend_URL` constant to keep my code **DRY (Don't Repeat Yourself)** and make it easy to update the API path later.
- I created a `todoService` object to group all my API logic in one place:
    - `getAll`: Uses a **GET** request to fetch all tasks from the database.
    - `create`: Uses a **POST** request to send a new task item to the server.
    - `update`: Uses a **PUT** request with a specific `id` to modify an existing task.
    - `delete`: Uses a **DELETE** request with an `id` to remove a task from the backend.
- This structure makes my code more **modular** and easier to test.


## TodoItem.jsx
- I imported **useState** for managing local edit states and **useTodos** to access global actions.
- The component receives an `item` object as a **prop**, which contains the task details.
- I set up two local states:
    - `isEditing`: A boolean to toggle between the normal view and the edit input field.
    - `editText`: To store the temporary changes while the user is typing in edit mode.
- I created a `handleSave` function that calls `updateTodo` from the context and then exits edit mode.
- In the **UI (Return statement)**:
    - I used **Dynamic Class Names** to add a "completed" class if the task is finished (for CSS styling).
    - I added a **Checkbox** that toggles the `completed` status directly in the database via `updateTodo`.
    - I used **Conditional Rendering** (Ternary Operator) to switch between displaying a `<span>` and an `<input>` field based on the `isEditing` state.
    - I implemented **Action Buttons**:
        - The **Edit/Save button** changes its text and function dynamically based on whether the user is currently editing.
        - The **Delete button** triggers the `deleteTodo` function using the item's unique `_id`.

## TodoContext.jsx
- I imported **createContext**, **useState**, and **useEffect** to build a global state management system.
- I imported `todoService` to connect my context directly to the backend API.
- I created the **TodoProvider** component to wrap my entire application, allowing any child component to access the todo data.
- I used the **useEffect hook** to fetch all tasks from the database as soon as the app loads.
- I implemented four main functions to manage the state:
    - `loadTodos`: Fetches the initial list from the server.
    - `addTodo`: Sends a new task to the backend and updates the local state using the **spread operator** (`...todos`).
    - `deleteTodo`: Removes a task from the server and uses `.filter()` to update the UI instantly.
    - `updateTodo`: Sends updates (like completion status or text changes) to the server and uses `.map()` to replace only the modified task in the state.
- I added **Error Handling** with `try...catch` blocks and alerts to notify the user if a server request fails.
- Finally, I exported a **custom hook** `useTodos` so I can easily consume this context in any component without writing `useContext(TodoContext)` every time.

## App.css
- I used **CSS Variables (`:root`)** to store my color palette. This makes it super easy to change the theme (like the dark purple background or green buttons) in one single place.
- I set up a **Flexbox layout** on the body to make sure the Task Manager stays centered on the screen.
- For the **Todo Form**, I used a transparent background with rounded corners and a "+" button that stands out with a green success color.
- I styled the **Todo Items** to look like clean cards:
    - I used `justify-content: space-between` to push the task text to the left and the action buttons to the right.
    - I added a **Line-through decoration** that automatically applies when a task is marked as completed.
- I implemented **Hover Effects** on the Edit and Delete buttons to give the user visual feedback when they move their mouse over them.
- For the **Search Bar**, I used advanced effects like `backdrop-filter: blur(10px)` to give it a modern, "Glassmorphism" look.
- I styled the **Edit Input** specifically so that when a user clicks to edit a task, the input box stands out with a clear border and a focus shadow.
- I ensured the design is **Responsive** by setting a `max-width: 800px` so the app looks good on both small and large screens.

## Problem Statement

- **Late Feature Integration:** After rechecking the requirements, I found that I forgot to add search bar as per requirements. 
- **CSS Conflicts:** Adding the search bar at the end caused several layout issues. I had to carefully refactor my existing CSS to ensure the search container didn't push other elements out of place.
- **Code Refactoring:** I had to go back and edit components that were already tested. This taught me the importance of planning features early to avoid "spaghetti code" and style overlaps.
- **State Management:** Integrating the `searchQuery` into the existing filter logic required me to rethink how my `todos` were being mapped to the UI.


## Links
[Frontend repository link](https://github.com/sachin99651/To-Do-List.git)  
[Frontend Deployed Netlify Link](https://to-do-list-sch.netlify.app/)  
[Backent repository link](https://github.com/sachin99651/to-do-backend.git)  
[Render Deployed Api Link](https://to-do-backend-3of0.onrender.com)
