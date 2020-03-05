import React from "react";
import { increment, decrement } from "./redux/actionCreators";
import { connect } from "react-redux";

class Increment extends React.Component {
  componentDidMount() {
    //this.props.getState();
    console.log("did mount");
  }
  render() {
    console.log(this.props.value);
    return (
      <>
        {" "}
        <h1>HELLO = {this.props.value}</h1>
        <button onClick={() => this.props.incre(4)}>INCREMENT </button>
        <button onClick={() => this.props.decre(2)}>DECREMENT </button>
      </>
    );
  }
}

const mapStateToProp = state => ({
  value: state.value
});
const mapPropToDispatch = dispatch => {
  return {
    incre: value => dispatch(increment(value)),
    decre: value => dispatch(decrement(value))
    // getState: () => dispatch({ type: "GETSTATE" })
  };
};

export default connect(
  mapStateToProp,
  mapPropToDispatch
)(Increment);
