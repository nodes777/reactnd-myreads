# MyReads Project

This is a bookshelf app displaying different books for Udacity's React Nanodegree program.

## Installation

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Changes from original design

* Included more accessible moving of shelf functionality
    ... The useage of [onchange in a select element](https://webaim.org/techniques/javascript/eventhandlers#onchange) to immediately change information is innaccessible as it prevents keyboard-only users from ever being able to move a book to anything other than "Want To Read". The event fires onchange, which occurs on every arrow keypress. I implemented a button expanded format.

## Packages And Utilities 

* [Create React App](https://github.com/facebookincubator/create-react-app)
* [React Router](https://github.com/ReactTraining/react-router)
* [React Prop Types](https://www.npmjs.com/package/prop-types)