# Task List App

A modern, responsive task management application built with React that allows users to add, edit, and delete tasks with an intuitive user interface.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/react-19.0+-61dafb.svg)

## 🎯 Live Demo

🔗 [Task List](https://rth-task-list.netlify.app/)

We would appreciate it if you decide to use this project. Please include credit when using it. Thank you! 🙏

## ✨ Features

- ✅ Add new tasks with a simple input form
- ✏️ Edit existing tasks with visual indicators
- 🗑️ Delete tasks with confirmation modal
- 💾 Automatic local storage — tasks persist across page reloads
- 🌓 Dark/Light mode toggle with smooth theme switching
- 🔄 Drag and drop reordering of tasks
- 📱 Fully responsive design that works on mobile and desktop
- 🎨 Modern UI/UX with smooth animations and transitions
- 🔔 Toast notifications for user feedback
- 📅 Due date selection for each task
- ✅ Task completion status with check/uncheck
- 🎯 Task counter showing remaining tasks

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download the project files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

The app will open in your default browser at `http://localhost:3000`

## 🛠️ Technologies Used

| Technology | Description |
|---|---|
| **React 19** | Frontend framework with Hooks (`useState`, `useEffect`) |
| **CSS3** | Custom styling with CSS variables for theming |
| **React Hot Toast** | Toast notifications |
| **Lucide React** | Icon library |
| **@hello-pangea/dnd** | Drag and drop functionality |
| **LocalStorage API** | Data persistence |
| **Google Fonts** | Poppins font family |

## 📁 Project Structure

```
task-list-app/
├── public/
├── src/
│   ├── App.js          # Main React component with all logic
│   ├── App.css         # Styles with CSS variables and animations
│   └── ...
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## 🎯 How to Use

### Adding a Task
1. Type your task in the input field
2. Select a due date (optional)
3. Click the plus (+) button or press Enter
4. A success toast will confirm the task was added

### Editing a Task
1. Click the pencil icon next to any task
2. The task text will appear in the input field
3. Modify the text and/or date and click the plus button to save

### Completing a Task
- Click the circle icon next to any task to mark it as complete
- Completed tasks show a checkmark and are visually distinct
- Click again to uncomplete

### Deleting a Task
1. Click the trash icon next to any task
2. A confirmation modal will appear
3. Confirm to delete or cancel to keep the task

### Reordering Tasks
- Click and drag the grip icon (⋮⋮) on the left side of any task
- Drag up or down to reorder your tasks

### Theme Switching
- Click the sun/moon icon in the top-right corner to toggle between light and dark mode
- Theme preference is saved automatically

## 🎨 Design Features

- **Clean Typography:** Uses Poppins font from Google Fonts
- **Modern Color Palette:** Earthy tones with accent colors
- **Smooth Animations:** Fade and slide animations for modals
- **Interactive Elements:** Hover effects and transitions
- **Visual Feedback:** Badges, toasts, and color indicators
- **CSS Variables:** Easy theme customization
- **Drag Indicators:** Visual feedback when dragging tasks

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- **Mobile devices** (`max-width: 480px`) — Optimized layout
- **Tablets and larger screens** — Full desktop experience

## 🔧 Customization

You can easily customize the app by modifying:

- **Colors:** Update the CSS variables in `:root` and `[data-theme='dark']` sections
- **Icons:** Replace Lucide React icons with your preferred set
- **Animations:** Adjust durations and effects in the CSS
- **Layout:** Modify the component structure in `App.js`
- **Theme:** Customize dark/light mode colors

## 📝 To-Do / Future Enhancements

Potential features for future development:

- Task categories or tags
- Due date reminders
- Task priority levels
- Export/import tasks (JSON/CSV)
- Keyboard shortcuts
- Search/filter tasks
- Task notes/description
- Subtasks support
- Multiple task lists
- Share tasks via link

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev)
- Fonts by [Google Fonts](https://fonts.google.com)
- Toast notifications by [React Hot Toast](https://react-hot-toast.com)
- Drag and Drop by [@hello-pangea/dnd](https://github.com/hello-pangea/dnd)

## 📞 Contact :

Have questions or suggestions? Feel free to reach out:

- **Developer**: ANASS EL HARAZI
- **Email**:  [anaswins35@gmail.com](mailto:anaswins35@gmail.com)
- **LinkedIn**: [ANASS EL HARAZI](https://www.linkedin.com/in/anasselharazi/)