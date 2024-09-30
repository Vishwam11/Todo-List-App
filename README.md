
# MERN Stack To-Do List App

## Live Demo:
[To-Do List App](https://todo-list-app-theta-ten.vercel.app/)

## Overview:
This is a basic to-do list application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app allows users to create, read, update, and delete to-do items while managing the status of completion for each item.

## Objective:
This project was created to demonstrate the following skills:
- Node.js server-side development
- React.js component structure and state management
- MongoDB database interactions
- Basic CRUD operations (Create, Read, Update, Delete)

## Features:
- Add new to-do items
- Fetch and display a list of to-do items
- Update the status of completion for a to-do item
- Delete a to-do item
- Error handling for both server-side and client-side operations
- Responsive and user-friendly UI

## Task Breakdown:
### Node.js Server:
1. Set up a Node.js project using npm.
2. Installed necessary dependencies: express, mongoose, cors.
3. Created a MongoDB database and connected to it using Mongoose [MongoDB Atlas, Compass].
4. Defined a Mongoose schema for a to-do item (e.g., Task).
5. Created API endpoints for:
   - Creating a new to-do item
   - Fetching all to-do items
   - Updating a to-do item's status
   - Deleting a to-do item

### React.js Client:
1. Created a React project using create-react-app.
2. Set up a component structure to display a list of to-do items.
3. Used state to manage the list of to-do items.
4. Fetched to-do items from the Node.js server when the component mounted.
5. Implemented functionality to:
   - Add new to-do items
   - Toggle the completion status of a to-do item
   - Delete a to-do item
6. Updated the UI to reflect changes in the to-do list.

## How to Run the Project Locally:
1. Clone the repository.
2. Navigate to the `Backend` directory and run `npm install` to install the dependencies.
3. Navigate to the `Frontend` directory and run `npm install`.
4. Create a `.env` file in the `server` directory with your MongoDB connection string.
5. Start the Node.js server by running `npm run dev` inside the `Backend` directory.
6. Start the React client by running `npm start` inside the `Frontend` directory.
7. Access the app locally at `http://localhost:3000`.

