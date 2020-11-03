# udemy-class-based-components

## Class-Based Components

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

## Application Overview

Benefits of Class Components:

* Easier code organization
* Can use state (another React system)
  * Easier to handle user input
* Understands lifecycle events
  * Easier to do things when the app first starts

This is a React application that displays an appropriate screen based on what season a user is experiencing right now by detecting the location and time of the user.

App Challenges:

* Need to get the user's physical location
* Need to determine the current month
* Need to change text and styling based on location + month

```text
            App       - Has code to determine location + month
             |
             | It is winter
             |
             V
        SeasonDisplay - Shows different text/icons based on props
```

---

## Getting a Users Physical Location

The application uses [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/APIGeolocation_API) to obtain user's location. It can determine user's location based on the latitude information we get form Geolocation API's Position object.

---

## Handling Async Operations with Functional Components

1. JS file loaded by browser
2. App component gets created
3. We call geolocation service - **ASYNC CALL!**
4. App returns JSX, gets rendered to page as HTML
5. We get result of geolocation

Since step 4 will execute before step 3 completes its execution, React app with functional component causes an error.

---

## Refactoring from Functional to Class Components

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

---

## Rules of State

Below are the rules of State

* Only usable with class components - State can be also used with hooks system
* You will confuse props with sate 🙁
* 'State' is a JS object that contains data relevant to a component
* Updating 'state' on a component causes the component to (almost) instantly render
* State must be initialized when a component is created
* State can **only** be updated using the function 'setState'

---

## App Lifecycle Walkthrough

1. JS file loaded by browser
2. Instance of App component is created
3. App components 'constructor' function gets called (optional)
   * 'super' function must to be called along with the constructor function
4. State object is created and assigned to the 'this.state' property
5. We call getlocation service
6. React calls the components to render method
7. App returns JSX, gets rendered to page as HTML
8. We get result of geolocation!
9. We update out state object with a call to 'this.setState'
10. React sees that we updated the state of a component
11. React calls our 'render' method a second time
12. React takes that JSX and updates content on the screen


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
