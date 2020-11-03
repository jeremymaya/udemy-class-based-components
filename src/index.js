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
    constructor(props) {
        // super() references the parent constructor function for React.Component
        super(props);

        this.state = { lat: null };
    }
    // render() is required by React
    render() {
        window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
        )
        
        return <div>Latitude: </div>
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);