import React, { Component } from 'react';

class Counter extends Component {

    state = {
        value: this.props.counter.value,
    };


    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 })
    }


    render() {
        
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    className='btn btn-secondary btn-sm'
                    onClick={this.handleIncrement}
                >
                    Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        )
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes
    }

    formatCount() {
        return this.state.value === 0 ? 'Zero' : this.state.value;
    }

}

export default Counter;