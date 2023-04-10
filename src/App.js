import React,{Component} from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';

class App extends Component {
  state = {
    counters: [
        { id: 1, value: 0},
        { id: 2, value: 1},
        { id: 3, value: 2},
        { id: 4, value: 3}
    ]
}
 
handleReset = () => {
    
    const counters = this.state.counters.map(c => {
        c.value = 0
        return c;
    });
    this.setState({ counters });
    
}

handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters})
}

handleIncremnt = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
}

handleDecrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = { ...counter };
  counters[index].value--;
  this.setState({ counters });
}
  render(){

  return (
    <React.Fragment>
      <NavBar 
        totalCounters = {this.state.counters.filter(c => c.value > 0).length}
      />
      <main className="container">
        <Counters 
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncremnt}
          onDecrement={this.handleDecrement}
          counters={this.state.counters}
        />
      </main>
    </React.Fragment>
  );
}
}

export default App;
