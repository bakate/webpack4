import React, { useReducer } from 'react';
import styled from 'styled-components';

const CounterStyles = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  button {
    background-color: #369;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    border-radius: 20px;
  }
`;
const initialState = 0;
const countReducer = (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'add':
      return state + 2;
    case 'minus':
      return state - 2;
    case 'multiply':
      return state * 2;
    case 'divide':
      return state / 2;

    default:
      return state;
  }
};

const CountReducer = () => {
  const [count, dispatch] = useReducer(countReducer, initialState);

  return (
    <>
      <p>Count value is: {count}</p>
      <CounterStyles>
        <button type="button" onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
        <br />
        <button type="button" onClick={() => dispatch({ type: 'add' })}>
          Plus (+)
        </button>
        <br />
        <button type="button" onClick={() => dispatch({ type: 'minus' })}>
          Minus (-)
        </button>
        <br />
        <button type="button" onClick={() => dispatch({ type: 'multiply' })}>
          Multiply (*)
        </button>
        <br />
        <button type="button" onClick={() => dispatch({ type: 'divide' })}>
          Divide (/)
        </button>
        <br />
      </CounterStyles>
    </>
  );
};

export default CountReducer;
