import React from 'react';

class XClassComp extends React.Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0
    };
    
    // Bind methods to the class instance
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  decrement() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  reset() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div className="counter">
        <h1>  Counter App </h1>
        <div className="count-display">Count: {this.state.count}</div>
        <div className="button-group">
          <button onClick={this.increment}>Increment (+)</button>
          <button onClick={this.decrement}>Decrement (-)</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default XClassComp;