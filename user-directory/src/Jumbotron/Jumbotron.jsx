import React, { Component } from 'react';
import "./Jumbotron.css";

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron text-center -blue">
                <h1>Employee Directory</h1>
                <p>Click on carrots to filter by heading or use the search box to narrow results.</p>
            </div>
        );
    }
}

export default Jumbotron;