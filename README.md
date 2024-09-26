# TO DO LIST 

## Description

This is a **React**-based to-do list application that allows users to create, manage their tasks. It supports both **light** and **dark mode**, and users can categorize tasks into "Work" and "Personal" sections. Tasks can be marked as complete, edited, and deleted as needed. The application also allows users to set task priorities as **Low**, **Medium**, or **High**. This application uses **MockAPI** for storing and managing tasks.

### Deployed to Vercel : https://to-do-list-ruddy-one.vercel.app/

## Features

- Create tasks with a title, description, priority (Low, Medium, High), and due date.
- Categorize tasks into "Work" or "Personal".
- Mark tasks as complete or incomplete.
- Edit or delete tasks.
- Responsive design.
- Toggle between light and dark mode for better user experience.
- Uses MockAPI to persist task data.

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js**: Download and install from [nodejs.org](https://nodejs.org/).
- **Git**: Download and install from [git-scm.com](https://git-scm.com/).

### Clone the Repository

To install the application locally, follow these steps:

1. Open your terminal or command prompt.
2. Clone the repository:

```bash
git clone https://github.com/dominikabemberakova/to-do-list.git
```
3. Navigate to the project directory:
```bash
cd todo-list
```
4. Install Dependencies
Once you're in the project directory, install the necessary packages by running:
```bash
npm install
```
5. Start the Application
To start the development server, use the following command:
```bash
npm run dev
```
The application will be available at http://localhost:3000 in your browser.

## MockAPI Setup

This project uses MockAPI to handle tasks management. MockAPI is used as a backend to persist tasks between sessions.

You don’t need any additional configuration to get started as the API is pre-configured within the project. You can customize the endpoints or create a new MockAPI project if needed.

## Usage

Once the application is running:

- **Add a Task**: Enter the task title, description, priority (Low, Medium, High), and due date, then click **Add Task**.
- **Set Task Priority**: When creating or editing a task, you can set its priority. The task can be labeled as:
  - **Low**: Tasks with less urgency.
  - **Medium**: Default priority for general tasks.
  - **High**: Tasks requiring immediate attention.
- **Edit/Delete a Task**: After adding tasks, you can edit or delete them using the corresponding buttons.
- **Mark Tasks as Complete**: Use the **Mark as Complete** button to mark tasks as finished.
- **Toggle Light/Dark Mode**: Switch between light and dark mode for a better user experience.
- **Task Categories**: Switch between "Work" and "Personal" task categories via the navigation menu.

## Folder Structure

Here’s an overview of the key project files:

- **`Board.jsx`**: This component handles the main task management logic and interacts with MockAPI.
- **`Column.jsx`**: Responsible for rendering task columns (e.g., "To Do" and "Done").
- **`TaskCard.jsx`**: Renders individual tasks within a column.
- **`Navbar.jsx`**: Contains the navigation menu for switching between categories and the dark mode toggle.
- **`api.jsx`**: Handles the connection to the MockAPI backend.
- **`globals.css`**: Defines the global CSS styles for both light and dark modes and responsive layout.

## Summary

The **TO DO LIST** application provides an easy and efficient way to manage tasks, offering the ability to categorize, edit, set priority levels, and mark tasks as complete. Its responsive design and dark mode option ensure a modern user experience, while **MockAPI** ensures that tasks are stored persistently across sessions.

Feel free to clone, modify, and contribute to this project!

## License

This project is licensed under the MIT License.

---

## Author

**Dominika Bemberakova**

This project was developed as a **case study**.


