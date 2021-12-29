import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './component/Form';
import Table from './component/Table';
import Navigator from './component/Navigator';

const initialValues = {
  row: 5,
  col: 5,
};

function App() {
  const [row, setRow] = useState(initialValues.row);
  const [col, setColumn] = useState(initialValues.col);

  const [activeIndex, setActiveIndex] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();

    setRow(parseInt(e.currentTarget.elements.row.value));
    setColumn(parseInt(e.currentTarget.elements.col.value));
  };

  const selectTableIndex = (value) => {
    const maxIndex = row * col - 1;
    if (value === 'up') {
      setActiveIndex((prevState) =>
        prevState - col < 0 ? prevState : prevState - col
      );
    } else if (value === 'left') {
      setActiveIndex((prevState) =>
        prevState - 1 < 0 ? prevState : prevState - 1
      );
    } else if (value === 'right') {
      setActiveIndex((prevState) =>
        prevState + 1 > maxIndex ? prevState : prevState + 1
      );
    } else if (value === 'down') {
      setActiveIndex((prevState) =>
        prevState + col > maxIndex ? prevState : prevState + col
      );
    }
  };

  useEffect(() => {
    setActiveIndex(0);
  }, [row, col]);

  return (
    <div id='App'>
      <h1 id='title'>Assignment 1</h1>
      <div className='container'>
        <Form initialValues={initialValues} onSubmit={onSubmit} />
        <Navigator selectTableIndex={selectTableIndex} />
        <Table row={row} col={col} activeIndex={activeIndex} />
      </div>
    </div>
  );
}

export default App;
