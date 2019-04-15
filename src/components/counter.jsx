import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { onDelete, onDecrement, onIncrement } = this.props;
    return (
      <div className="row">
        <div className="col col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button onClick={onIncrement} className="btn btn-secondary btn-sm">
            +
          </button>
          <button
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
            onClick={onDecrement}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>
          <button onClick={onDelete} className="btn btn-danger btn-sm">
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
