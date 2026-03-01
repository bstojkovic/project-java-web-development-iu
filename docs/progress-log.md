# Progress log

## 20.2.2026.
* Created a GitHub repository

## 21.2.2026.
* Cloned the repository locally
* Planned out and edited the README.md file, writing out a structure that will make it easier to track development of this application
  * Filled in the first heading with information from Phase 1 presentation, and added a tech stack note
* Created a docs/ folder with files for tracking all changes and decisions

## 22.2.2026.
* Googled React.js installation instructions
* Encountered a design decision on how to create React app, that will be outlined in [design notes](./design-notes.md)
  * Chose to try creating a React app from scratch

## 24.2.2026.
* Continued reading React.js installation instructions
* Encountered a design decision on which tool to use to actually build React app, that will be outlined in [design notes](./design-notes.md)
  * Chose to try using Vite

## 25.2.2026.
* React.js installation instructions via Vite shows a command to be ran in order to build a React scaffold, which I ran (`npm create vite@latest frontend -- --template react-ts`)
  * For framework, I chose React, and for variant I chose TypeScript because I want to learn more about static typing and the benefits it comes with
* After installation, I visited localhost and confirmed the Vite + React skeleton is running in the browser, satisfying iteration 0.1 criteria

## 26.2.2026.
* Defined Iteration 0.2 success criteria, including views, user flow, and functionality (minimal for this iteration)

## 27.2.2026.
* Looked at `frontend/index.html` and saw that it references `src/main.tsx`
* Opened `src/main.tsx` and saw that the application is loaded from `App.tsx`
* Changed `App.tsx` to only include a blank link
* Removed:
  * (for now) non-existent state by deleting `useState`
  * (for now) unnecessary imports
  * React + Vite skeleton assets
* Tried running the app by using commands `npm run`, `npm start`, and `npm run dev` but the same error appeared
  * The error says that package.json doesn't exist, while I can clearly see it in the directory
* Figured out my working directory was not `frontend/`, so I changed it and ran `npm run dev` and it worked
  * But I encountered an error because I forgot to save `App.tsx`, so I saved it, and got presented by a blank page with a blank link (🥳)

## 28.2.2026.
* Read React.js documentation and saw that `useState` can be used to manage state
  * This way I can, in this iteration, use state to switch between two views
  * Later, I can extract components and work on those
* For some reason, after adding state, nothing is being shown on the page
  * The web browser console says "Invalid hook call"
  * The functions and state need to be inside the `App` function, which resolved the error
* But now the state doesn't change
  * Fixed it by actually changing state instead of applying the same state (🤦)
* The page now has two 'views' and the user can transition between them, satisfying iteration 0.2 criteria

## 1.3.2026.
* Searched React.js for a way to separate components (views) in order to refactor the current code structure for clarity and maintainability
  * Separated inline views into components
  * Decided to use a function that checks which view is current and returns a component
