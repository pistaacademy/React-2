import React, { Component } from 'react';

class Counter extends Component {

    render() {
        
        return (
            <div className='row'>
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col">
                    <button 
                        className='btn btn-secondary btn-sm m-2'
                        onClick={() => this.props.onIncrement(this.props.counter)}
                    >
                        +
                    </button>
                    <button 
                        className='btn btn-secondary btn-sm'
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        disabled={this.props.counter.value === 0 ? 'disabled' : ''}
                    >
                        -
                    </button>
                    <button 
                        onClick={() => this.props.onDelete(this.props.counter.id)} 
                        className="btn btn-danger btn-sm m-2">
                            Delete
                    </button>
                </div>
            </div>
        )
    };

    getBadgeClasses() {
        let classes = "badge badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes
    }

    formatCount() {
        return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
    }

}

export default Counter;