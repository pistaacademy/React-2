import React, { Component } from 'react';

class Counter extends Component {

    componentDidUpdate(prevProps,prevState){
        console.log("prevProps",prevProps)
        console.log("prevState",prevState)
    }

    componentWillUnmount() {
        console.log('Counter - UnMount');
    }

    render() {
        console.log('Counter - Rendered');
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    className='btn btn-secondary btn-sm'
                    onClick={() => this.props.onIncrement(this.props.counter)}
                >
                    Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        )
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes
    }

    formatCount() {
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    }

}

export default Counter;