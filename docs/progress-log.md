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

## 2.3.2026.
* Defined Iteration 0.3 success criteria, including views' contents and navigation

## 3.3.2026.
* Created an ordered list of project titles (numbered)
* Searched React.js documentation for map; found `Children` API and used its `map` function
  * Created an array of project titles and rendered them using `Children.map`
* Noticed that `Children` API is legacy, and there are new, better ways to do the same thing
  * Figured out that the vanilla `map` works better, but with a caveat that each item needs to have an ID inside `key` property
  * Changed the implementation to use the `map` method
  * Turned project array into an array of objects with ID and title for each project
  * Added `key` property to the rendered `li`

## 4.3.2026.
* Created a simple HTML form
  * Got an error for `for=` attribute, which said `htmlFor` should be used instead
  * Tried using `value` for completion percentage, but that fixed the value to `0` and could not be changed
    * Instead, `defaultValue` should be used
* Searched React.js documentation for using Forms, added `action=` with a dummy function that logs to console for this iteration
* The application now has two dummy views with navigation, satisfying iteration 0.3 criteria

## 5.3.2026.
* Defined Iteration 0.4 success criteria, including a new usage flow
* Added `onClick` property to rendered `<li>` elements with console log
  * Looked up React.js documentation, switched to an anonymous function which passes the current project
    * Had issues with implicit `any` type, ended up explicitly defining as `any` until projects become components
  * Logged project id and title successfully to console on click

## 6.3.2026.
* Searched React documentation for a way to handle state from child to parent
  * Saw a way to share state between components and a term "Lifting state up"
  * Tried solving the exercise/challenge on the documentation page, struggled, saw a simple syntax issue, and then solved it
* Added a callback from Repository component back to the parent App
* Removed obsolete button and function for switching views
* Added a function for setting current view
* Defined a class Project
  * Used `| undefined` for attributes to prevent errors, will fix later
* Looked up class documentation for TypeScript and defined a constructor, fixing above errors, removing `| undefined` type hints
* I need to figure out how to remove `any` type hints, so far without success
* Implemented functionality that shows ProjectForm for a project when one of them is clicked in the Repository
  * Did a lot of trial and error, with slight syntax issues presenting the biggest problem

## 7.3.2026.
* Defined type hint for function as parameter with `Function`
* Added `onCancel` and `onSubmit` callback functions on `ProjectForm`
  * `onCancel` uses a button outside the form to cancel editing the project
* For now, submitting only logs to the console that the project information has been submitted
* Added submitting the form, but got a React Hooks error
  * Read React.js documentation and after a while figured out I'm rendering `ProjectForm`/`Repository` inside a conditional
  * Saw section on conditional rendering, debugged current code and implemented ternary operator with TSX instead of functions
  * Saw section on props, added props to all child components for type hinting
* Moved projects to `App`
