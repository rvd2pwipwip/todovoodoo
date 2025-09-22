# TodoVoodoo Learning Logbook

_A step-by-step tutorial documenting my React learning journey_

---

## Step 1: Creating a React Project with Vite

**What I Learned**: How to set up a modern React development environment using Vite

**The Command**:

```bash
npm create vite@latest . -- --template react
```

**Command Breakdown**:

- `npm create` - npm's tool for running package creation utilities
- `vite@latest` - uses the latest version of Vite's project creation tool
- `.` - creates the project in the current directory
- `--` - separator that passes everything after it directly to Vite
- `--template react` - tells Vite to use the React template (instead of vanilla JS, Vue, etc.)

**What This Does**:

- Downloads and runs Vite's project creation tool
- Sets up a complete React development environment
- Creates all necessary configuration files
- Installs the basic project structure with sample components

**Why Vite?**:

- Much faster than traditional tools like Create React App
- Modern build tool with instant hot reloading
- Simpler configuration
- Better development experience

**Key Concept**: This command creates the foundation for a React project with all the modern tooling needed for development.

---

## Step 2: Setting Up the Development Environment

**What I Learned**: How to install dependencies and start a React development server

**The Commands**:

```bash
npm install
npm run dev
```

**Command Breakdown**:

**`npm install`**:

- Reads the `package.json` file created by Vite
- Downloads all required dependencies into `node_modules/` folder
- Creates `package-lock.json` to lock specific package versions
- Sets up the project's dependency tree

**`npm run dev`**:

- Starts Vite's development server (typically on http://localhost:5173)
- Enables hot module replacement (HMR) - code changes appear instantly in browser
- Bundles and serves React code in development mode
- Watches files for changes automatically

**What This Does**:

- Creates a complete development environment
- Provides instant feedback when editing code
- Serves your React app locally for testing
- Enables modern development features like hot reloading

**Key Project Structure Created**:

- `src/` - Contains React components and application code
- `public/` - Static assets that don't need processing
- `index.html` - Entry point that loads the React app
- `vite.config.js` - Build tool configuration
- `node_modules/` - All downloaded dependencies
- `.gitignore` - Tells Git which files/folders to ignore when tracking changes

**About .gitignore**:

- Automatically created by Vite with sensible defaults
- Prevents `node_modules/` from being committed (too large, can be regenerated with `npm install`)
- Excludes build output and temporary files
- Keeps your Git repository clean and focused on source code only

**Key Concept**: The development server creates a live connection between your code and browser, making development fast and interactive.

---

## Step 3: Cleaning Up Template Code for Learning

**What I Learned**: How to start with a clean React project by removing template code and understanding the minimal structure needed

**What I Removed**:

- All Vite template styling and components from `App.jsx`
- Template assets from `src/assets/` folder
- Unnecessary boilerplate code

**What I Kept**:

- `main.jsx` - The entry point that connects React to the DOM
- `index.css` - CSS reset for consistent styling foundation
- Clean `App.jsx` with minimal structure

**My Clean App.jsx**:

```jsx
function App() {
  return (
    <>
      <h1>TODO VOODOO</h1>
    </>
  );
}

export default App;
```

**Key Structure Elements**:

- **Function component** - Modern React component syntax
- **React Fragment** (`<>...</>`) - Groups elements without extra DOM nodes
- **JSX** - JavaScript syntax extension that looks like HTML
- **Export default** - Makes the component available for import

**Why Clean Up First?**:

- Removes distractions from template code
- Lets you focus on learning React concepts
- Gives you full control over what you build
- Follows React best practice: build static UI first, then add interactivity

**Development Strategy**:

1. Build static component layout first
2. Add styling for visual structure
3. Then add state and interactivity

**Key Concept**: Starting with a minimal, clean component structure allows you to learn React fundamentals without template code confusion.

---

## Step 4: Setting Up Version Control with Git and GitHub

**What I Learned**: How to initialize a Git repository and connect it to GitHub for version control

**The Process**:

```bash
git init                    # Initialize local Git repository
git status                  # Check which files are ready to track
git add .                   # Stage all files for commit
git commit -m "Initial project setup with clean Vite React template"
git remote add origin https://github.com/rvd2pwipwip/todovoodoo.git
git branch -M main          # Ensure main branch is set
git push -u origin main     # Push to GitHub and set upstream
```

**What This Accomplished**:

- Created local Git repository to track code changes
- Made initial commit with clean project foundation
- Connected local repository to GitHub remote
- Published project publicly for backup and collaboration

**Key Git Concepts**:

- **Repository**: A project folder tracked by Git
- **Staging**: Preparing files for commit with `git add`
- **Commit**: Saving a snapshot of your code with a message
- **Remote**: Connection to external repository (GitHub)
- **Push**: Uploading local commits to remote repository

**Why Version Control Now?**:

- Established clean foundation worth preserving
- Safety net before adding complex features
- Good practice to commit working states
- Enables tracking of learning progress through commits

**GitHub Repository**: [https://github.com/rvd2pwipwip/todovoodoo](https://github.com/rvd2pwipwip/todovoodoo)

**Key Concept**: Version control provides safety and history tracking - commit early and often, especially after completing working features.

---

## Step 5: Planning React Component Architecture

**What I Learned**: How to translate existing vanilla JS application structure into a React component hierarchy

**My Vanilla JS Foundation**:
I already built this todo app using vanilla JavaScript with modular architecture:

- **Services**: `projectManager.js`, `taskManager.js` (business logic)
- **Components**: UI components for dialogs and display
- **Utils**: Helper functions for dates, state management
- **Clear separation**: Logic separated from DOM manipulation

**Vanilla JS References**:

- **Original Assignment**: [The Odin Project - Todo List](https://www.theodinproject.com/lessons/node-path-javascript-todo-list)
- **GitHub Repository**: [https://github.com/rvd2pwipwip/odin-todo-list](https://github.com/rvd2pwipwip/odin-todo-list)
- **Live Demo**: [https://rvd2pwipwip.github.io/odin-todo-list/](https://rvd2pwipwip.github.io/odin-todo-list/)

**React Component Hierarchy**:

```
App
├── Sidebar
│   ├── Navigation
│   │   ├── FilterTabs (All, Today, 7 days)
│   │   └── ProjectList
│   │       └── ProjectTab (with edit/delete actions)
│   └── AddProjectButton
├── MainContent
│   ├── Header (dynamic title)
│   ├── TaskList
│   │   ├── TaskCard (checkbox, title, info, date, delete)
│   │   └── EmptyProject (when no tasks)
│   └── AddTaskButton
└── DialogContainer
    ├── AddTaskDialog
    ├── EditTaskDialog
    ├── TaskInfoDialog
    └── ProjectDialog (add/delete)
```

**Key Mappings from Vanilla JS to React**:

- `script.js` → `App.jsx` (main orchestrator)
- `projectUI.js` → `ProjectList.jsx`, `ProjectTab.jsx`
- `taskUI.js` → `TaskList.jsx`, `TaskCard.jsx`
- `*Dialog.js` → React dialog components
- Services layer → Can mostly stay the same!

**React Development Strategy**:

1. **Start with static components** - Build UI structure without interactivity
2. **Add props** - Make components reusable with data
3. **Add state management** - Replace DOM manipulation with React state
4. **Integrate existing services** - Reuse business logic from vanilla JS version

**Learning Advantage**:
Having a working vanilla JS version means I understand the problem domain and user experience requirements. Now I'm learning how React solves the same problems with different patterns.

**Key Concept**: Component hierarchy planning helps organize React applications into manageable, reusable pieces that map to real UI sections and user interactions.

---

## Step 6: Building First React Component with Props

**What I Learned**: How to create reusable React components that accept and display dynamic data through props

**Component Created**: `TaskCard.jsx`

```jsx
const TaskCard = ({ title, dueDate, priority, done }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{dueDate}</p>
      <p>{priority}</p>
      <p>{done}</p>
    </div>
  );
};

export default TaskCard;
```

**Using the Component in App.jsx**:

```jsx
<TaskCard title="Task 1" dueDate="2025-01-01" priority="High" done={false} />
```

**Key React Concepts Learned**:

- **Props**: How components receive data from their parent
- **Destructuring Props**: Clean syntax `({ title, dueDate, priority, done })`
- **JSX Expressions**: Using `{variable}` to display dynamic content
- **Component Reusability**: Same component with different data
- **Data Types in Props**: Strings, booleans, and proper JSX syntax for each

**What This Demonstrates**:

- Component accepts data instead of hard-coding it
- Same component renders differently based on props
- Clean separation between component logic and data
- Foundation for building dynamic, data-driven UIs

**Bottom-Up Approach Benefits**:

- Immediate visual feedback with working component
- Learning core React concepts in isolation
- Understanding props before tackling complex layouts

**Key Concept**: Props make React components reusable and dynamic - they're like function parameters but for UI components.

---

## Step 7: Adding Comprehensive TaskCard Styling

**What I Learned**: How to style React components with CSS, handle dynamic classes, and organize assets properly

**Styling Implemented**:

- **Priority-based color coding** using CSS custom properties (--high-priority, --medium-priority, --low-priority)
- **Material Icons integration** for task completion status (check_circle/radio_button_unchecked)
- **Dynamic CSS classes** based on component props (`priority-${priority.toLowerCase()}`)
- **Completed task styling** with opacity and line-through text decoration
- **Hover effects** for better user interaction feedback
- **Responsive layout** with flexbox and proper box-sizing

**Material Icons Setup**:

```css
@font-face {
  font-family: "Material Icons Rounded";
  font-style: normal;
  src: url("./assets/fonts/MaterialIconsRound-Regular.otf") format("opentype");
}
```

**Key CSS Techniques Learned**:

- **CSS Custom Properties** for consistent theming
- **Dynamic className** generation in JSX: `className={`task-card priority-${priority.toLowerCase()}`}`
- **Conditional styling** for completed tasks
- **Box-sizing: border-box** to prevent layout overflow
- **Organized asset structure** (fonts in `src/assets/fonts/`)

**CSS Architecture**:

- Component-specific CSS files (`TaskCard.css`)
- Global styles and variables in `index.css`
- Clean separation between layout and component styling

**React + CSS Integration**:

- Using `className` instead of `class`
- Importing CSS files into components
- Conditional class application based on props

**Key Concept**: React styling combines the power of dynamic JavaScript with CSS, allowing components to adapt their appearance based on data while maintaining clean separation of concerns.

---

_Next steps will be documented after implementation..._
