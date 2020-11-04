import React from 'react';
import ReactDOM from 'react-dom';

// Functional Component based
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         // two function callbacks
//         // 1. success callback
//         // 2. failure callback
//         position => console.log(position),
//         err => console.log(err)
//     )

//     return <div>Latitude: </div>;
// }

// Class Component based
class App extends React.Component {
    // initialized the state by using a constructor function
    // constructor function now has a single purpose - initializing the state object 
    constructor(props) {
        // super() references the parent constructor function for React.Component
        super(props);

        // this is ONLY TIME we do direct assignment to this.state
        this.state = { lat: null, errorMessage: '' };
    }

    // avoid data-loading in the constructor function
    componentDidMount() {
        // render method gets called often
        // saves resources and load time by moving the getCurrentPosition outside of the the render()
        // using setState to update the state
        // this.state.lat = position.coords.latitude is INVALID
        // this runs sometime in future NOT when the constructor function runs
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        )
    }

    // render() is required by React
    render() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: { this.state.errorMessage }</div>
        }

        if (!this.state.errorMessage && this.state.lat){
            return <div>Latitude: { this.state.lat }</div>
        }

        return <div>Loading!</div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);