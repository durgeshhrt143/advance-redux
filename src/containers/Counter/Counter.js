import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionCreater from "../../store/actions/index";
class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl label="Increment" clicked={this.props.onIncrement} />
        <CounterControl label="Decrement" clicked={this.props.onDecrement} />
        <CounterControl label="Add 5" clicked={this.props.onAdd} />
        <CounterControl label="Subtract 5" clicked={this.props.onSubstract} />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.res.map(strResult => (
            <li
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
const mapStateToProp = state => {
  return { ctr: state.ctr.counter, res: state.res.result };
};
const mapDispatchToProps = dispatch => {
  return {
    onIncrement: () => dispatch(actionCreater.increment()),
    onDecrement: () => dispatch(actionCreater.decrement()),
    onAdd: () => dispatch(actionCreater.add(5)),
    onSubstract: () => dispatch(actionCreater.substract(5)),
    onStoreResult: result => dispatch(actionCreater.storeResult(result)),
    onDeleteResult: id => dispatch(actionCreater.storeDelete(id))
  };
};
export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Counter);
