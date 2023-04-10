import React, {Component} from "react";
import Counter from './counter';

class Counters extends Component {
    
    render() {
        console.log('Counters - Rendered');
        const { onReset, onDelete, onIncrement, counters, onDecrement } = this.props;
        return (
            <div>
                <button
                    onClick={onReset} 
                    className="btn btn-primary btn-sm m-2"
                >Reset</button>
                {
                    counters.map(counter => 
                        <Counter
                            onDelete={onDelete} 
                            counter={counter}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            key={counter.id} 
                        />)
                }
            </div>
        )
    }
}

export default Counters;