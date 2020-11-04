# udemy-class-based-components

![Action Status](https://github.com/jeremymaya/udemy-class-based-components/workflows/build/badge.svg)

Author: Kyungrae Kim

Deployed App: <https://jeremymaya.github.io/udemy-class-based-components>

---

## Application Overview

This is a follow along project from [Modern React with Redux by Stephen Grider](https://www.udemy.com/course/react-redux/).

This is a React application that displays an appropriate screen based on what season a user is experiencing right now by detecting the location and time of the user.

App Challenges:

* Need to get the user's physical location
* Need to determine the current month
* Need to change text and styling based on location + month

```text
            App       - Has code to determine location + month
             |
             |
             | It is winter
             |
             V
        SeasonDisplay - Shows different text/icons based on props
```

---

## Architecture

This application uses the following dependencies:

* React
* ReactDOM
* [Semantic UI](https://semantic-ui.com/)
* GitHub Pages

---

## Getting Started

Clone this repository to your local machine:

```bash
https://github.com/jeremymaya/udemy-class-based-components.git
```

Install the dependencies:

```bash
npm install
```

### Development Mode

In the project directory, run:

```bash
npm start
```

The above command runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

---

## Notes from the Course Section

### Class-Based Components

Benefits of Class Components includes:

* Easier code organization
* Can use state (another React system)
  * Easier to handle user input
* Understands lifecycle events
  * Easier to do things when the app first starts

How React used to be:

* Class Components
  * Can produce JSX to show content to the user
  * Can use the lifecycle Method system to run code at specific points in time
  * Can use the "state" system to update the content on the screen
* Functional Components - more restricted
  * Can produce JSX to show content to the user

How React is Now:

* Class Components
* Hooks System (Function Components)
  * Can produce JSX to show content to the user
  * Can use **Hooks** to run code at specific points in time
  * Can use **Hooks** to access state and update the content on the screen

Companies with **established projects** are using Class-based Components

Companies with **newer projects** may be using Class-based components **or** Function-based components

### Getting a Users Physical Location

The application uses [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/APIGeolocation_API) to obtain user's location. It can determine user's location based on the latitude information we get form Geolocation API's Position object.

### Handling Async Operations with Functional Components

1. JS file loaded by browser
2. App component gets created
3. We call geolocation service - **ASYNC CALL!**
4. App returns JSX, gets rendered to page as HTML
5. We get result of geolocation

Since step 4 will execute before step 3 completes its execution, React app with functional component causes an error.

### Refactoring from Functional to Class Components

1. JS file loaded by browser
2. App component gets created
3. We call geolocation service - **ASYNC CALL!**
4. App returns JSX, gets rendered to page as HTML
5. We get result of geolocation
6. *Tell the component to render itself with this new information*

Using Class Components allows the app to use Reacts's State System

Below are the rules of Class Components

* Must be a Javascript Class
* Must extend (subclass) React.Component
* Must define a 'render' method that returns some amount of JSX

### Rules of State

Below are the rules of State:

* Only usable with class components - State can be also used with hooks system
* You will confuse props with sate 🙁
* 'State' is a JS object that contains data relevant to a component
* Updating 'state' on a component causes the component to (almost) instantly render
* State must be initialized when a component is created
* State can **only** be updated using the function `setState`

### App Lifecycle Walkthrough

App Lifecycle:

1. JS file loaded by browser
2. Instance of App component is created
3. App components 'constructor' function gets called (optional)
   * 'super' function must to be called along with the constructor function
4. State object is created and assigned to the 'this.state' property
5. We call getlocation service
6. React calls the components to render method
7. App returns JSX, gets rendered to page as HTML
8. We get result of geolocation!
9. We update out state object with a call to `this.setState`
10. React sees that we updated the state of a component
11. React calls our 'render' method a second time
12. React takes that JSX and updates content on the screen

### Introducing Lifecycle Method

A component lifecycle method is a function that can get optionally defined inside of a class based component.

The lifecycle method is called automatically by React at certain points during a component's life cycle.

Component Lifecycle:

1. constructor
2. render
   * content visible on screen
3. `componentDidMount`
   * sit and wait for updates
4. `componentDidUpdate`
   * sit and wait until this component is no longer shown
5. `componentWillUnmount`

### Why Lifecycle Methods

Component Lifecycle:

1. constructor - good place to do one-time setup
2. render - avoid doing anything besides returning JSX
   * content visible on screen
3. `componentDidMount` - good place to do data-loading
   * sit and wait for updates
4. `componentDidUpdate` - good place to do more data-loading when state/prop change
   * sit and wait until this component is no longer shown
5. `componentWillUnmount` - good place to do cleanup (especially for non-React stuff)

Notes:

* Avoid data-loading in the constructor function for code clarity purpose - use componentDidMount

Other available lifecycle methods (rarely used):

* `shouldComponentUpdate`
* `getDerivedStateFromProps`
* `getSnapshotBeforeUpdate`

---

## Credits

* [Modern React with Redux by Stephen Grider](https://www.udemy.com/course/react-redux/)
* [Semantic UI](https://semantic-ui.com/)
* [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/APIGeolocation_API)
* [Dev - Setting up a CI/CD workflow on GitHub Actions for a React App (with GitHub Pages and Codecov)](https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp)