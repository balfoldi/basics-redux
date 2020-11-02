import Container from "react-bootstrap/Container";
import React from "react";
import { createStore, combineReducers } from "redux";

const MulitpleReducer = () => {
  const BUY_PASTAS = "BUY_PASTAS";
  const EAT_PASTAS = "EAT_PASTAS";
  const BUY_RICE = "BUY_RICE";
  const EAT_RICE = "EAT_RICE";

  const pastasInitialState = {
    pastas: 4,
  };

  const riceInitialState = {
    rice: 8,
  };
  const pastasReducer = (state = pastasInitialState, action) => {
    switch (action.type) {
      case BUY_PASTAS:
        return {
          ...state,
          pastas: state.pastas + action.weight,
        };
      case EAT_PASTAS:
        return {
          ...state,
          pastas: state.pastas - action.weight,
        };
      default:
        return state;
    }
  };

  const riceReducer = (state = riceInitialState, action) => {
    switch (action.type) {
      case BUY_RICE:
        return {
          ...state,
          rice: state.rice + action.weight,
        };
      case EAT_RICE:
        return {
          ...state,
          rice: state.rice - action.weight,
        };
      default:
        return state;
    }
  };

  const rootReducer = combineReducers({
    pastas: pastasReducer,
    rice: riceReducer,
  });

  let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ); // reducer is the name of our future reducer function
  store.subscribe(() => {
    console.log(store.getState().rice);
    console.log(store.getState().pastas);
  });

  const buyPasta = (value) => {
    return {
      type: BUY_PASTAS,
      weight: value,
    };
  };
  const eatPasta = (value) => {
    return {
      type: BUY_PASTAS,
      weight: -value,
    };
  };

  const buyRice = (value) => {
    return {
      type: BUY_RICE,
      weight: value,
    };
  };
  const eatRice = (value) => {
    return {
      type: BUY_RICE,
      weight: -value,
    };
  };
  return (
    <Container>
      <h1 className="alert alert-success">Multiple reducer</h1>
      <button
        onClick={() => {
          store.dispatch(buyPasta(5));
        }}
      >
        Buy 5 pasta
      </button>
      <button
        onClick={() => {
          store.dispatch(eatPasta(1));
        }}
      >
        Eat 1 pasta
      </button>
      <button
        onClick={() => {
          store.dispatch(buyRice(5));
        }}
      >
        Buy 6 rice
      </button>
      <button
        onClick={() => {
          store.dispatch(eatRice(2));
        }}
      >
        Eat 2 rice
      </button>
      <div>
      <h1>List of todos</h1>
    </div>

    </Container>
  );
};
export default MulitpleReducer;
