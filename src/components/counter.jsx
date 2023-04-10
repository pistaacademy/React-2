import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        // this.state.count++
        this.setState({ count: this.state.count + 1 })
    }


    render() {
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    className='btn btn-secondary btn-sm'
                    onClick={this.handleIncrement}
                >
                    Increment
                </button>
            </React.Fragment>
        )
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes
    }

    formatCount() {
        return this.state.count === 0 ? 'Zero' : this.state.count;
    }

}

export default Counter;