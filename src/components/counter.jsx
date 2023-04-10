import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        names: []
    };

    renderTags() {
        if (this.state.names.length === 0) return <p>There are no tags!</p>;
        return <ul>{this.state.names.map(name => <li key={name}>{name}</li>)}</ul>
    }

    render() {
        return (
            <React.Fragment>
                {this.state.names.length === 0 && "There are no tags!"}
                {this.renderTags()}
            </React.Fragment>
        )
    };

}

export default Counter;