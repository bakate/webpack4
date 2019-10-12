import React, { useState } from 'react';
import styled from 'styled-components';

const CounterStyles = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  button {
    background-color: #849;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    border-radius: 20px;
  }
`;

const CountState = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count value is: {count}</p>
      <CounterStyles>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>
        <br />
        <button
          type="button"
          onClick={() => setCount(prevCount => prevCount + 2)}
        >
          Plus (+)
        </button>
        <br />
        <button
          type="button"
          onClick={() => setCount(prevCount => prevCount - 2)}
        >
          Minus (-)
        </button>
        <br />
        <button
          type="button"
          onClick={() => setCount(prevCount => prevCount * 2)}
        >
          Multiply (*)
        </button>
        <br />
        <button
          type="button"
          onClick={() => setCount(prevCount => prevCount / 2)}
        >
          Divide (/)
        </button>
        <br />
      </CounterStyles>
    </>
  );
};

export default CountState;
