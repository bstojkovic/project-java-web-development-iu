# What this application is
An interactive and responsive web application that enables students to create, view, and edit a repository containing past, current, and/or future projects.

The goal here is for the student to be able to manage a list of projects in an efficient manner with an emphasis on ease of use.​

# User benefits

# Tech stack
This application is making use of the lesser-known **FARM** stack which includes FastAPI, React.js and MongoDB. Python as a programming language is implied in this stack.

# How to run locally

## Frontend

## Backend

## Database

# Iterative development - intermediate products

## Iteration 0.1

### Success criteria

* Frontend skeleton initialized
* Runs locally and loads in browser
* Screens:
  * Default React.js scaffold screen

## Iteration 0.2

### Success criteria

* Runs locally and loads in browser
* Screens:
  * Homepage - repository listing all projects
  * Project view - form for creating a new or editing an existing project
* Navigation
  * Homepage has a link to Project view
  * Project view has a link to Homepage
* Functionality
  * In this iteration, only a blank screen with a link is shown for each view

## Iteration 0.3

### Success criteria

* Runs locally and loads in browser
* Views:
  * Project Repository
    * A bullet list of dummy-data projects (with titles only for this iteration)
  * Project Form
    * A placeholder HTML form containing project details (title, description, completion percentage)
* Navigation:
  * Button is used to navigate between the two views

## Iteration 0.4

### Success criteria

* Runs locally and loads in browser
* Views:
  * Project Repository
  * Project Form
* Functionality:
  * Clicking on a project in Project Repository opens prefilled Project Form with the details of the project (only title for this iteration)
  * Clicking on "Cancel" button returns to Project Repository without committing any changes
  * Clicking "Submit" on Project Form changes the project object, which can then be viewed in Project Repository
  * "Change View" button is obsolete at this point and is removed

## Iteration 0.5

### Success criteria

* Runs locally and loads in browser
* Components:
  * App
  * Project Repository
  * Project Form
  * Project
* Functionality
  * Introduce a new `Project` component which renders all project details
  * Ability to add new project via a "Add Project" button in Project Repository
  * Ability to remove a project via a "Remove Project" button in Project Form

# Test cases

# Demo

# Design/progress/change tracking
