import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      onDelete,
      onDecrement,
      onIncrement,
      counters
    } = this.props;
    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            onDelete={() => onDelete(counter.id)}
            onIncrement={() => onIncrement(counter)}
            onDecrement={() => onDecrement(counter)}
            counter={counter}
            key={counter.id}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
