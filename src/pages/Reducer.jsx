import Container from "react-bootstrap/Container";
import React from "react";
import { createStore } from "redux";

const Recuder = () => {
  const counter = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }

    return state;
  };
  let store = createStore(counter); // counter is the name of our future reducer function
  store.subscribe(() => console.log(store.getState()));

  const increment = (value, index) => {
    return {
      type: "INCREMENT",
      value,
      index,
    };
  };


  const decrement = (value, index) => {
    return {
      type: "DECREMENT",
      value,
      index,
    };
  };
  return (
    <>
      <Container>
        <h1 className="alert alert-success">Reducer</h1>
        <button
          onClick={() => {
            store.dispatch(increment(6, 2));
          }}
        >
          +
        </button>
        <button onClick={()=>{
          store.dispatch(decrement())
        }}>-</button>
      </Container>
    </>
  );
};
export default Recuder;
