# MyReads Project

This is the starter template for the final assessment project for Udacity's React Fundamentals course. The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## Installation

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Changes from original design

* Included more accessible moving of shelf functionality
    ... The useage of [onchange in a select element](https://webaim.org/techniques/javascript/eventhandlers#onchange) to immediately change information is innaccessible as it prevents keyboard-only users from ever being able to move a book to anything other than "Want To Read". The event fires onchange, which occurs on every arrow keypress. I implemented a button expanded format.
