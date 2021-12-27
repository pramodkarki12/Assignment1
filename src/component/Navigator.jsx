import React from 'react';
import {
  AiOutlineArrowUp,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineArrowDown,
} from 'react-icons/ai';

const Navigator = ({ selectTableIndex }) => {
  //   const moveUp = () => {
  //     setActiveIndex((prevIndex) => prevIndex - col);
  //   };

  //   const moveLeft = () => {
  //     setActiveIndex((prevIndex) => prevIndex - 1);
  //   };

  //   const moveRight = () => {
  //     setActiveIndex((prevIndex) => prevIndex + 1);
  //   };

  //   const moveDown = () => {
  //     setActiveIndex((prevIndex) => parseInt(prevIndex) + col);
  //   };

  return (
    <div id='navigator'>
      <div id='first' className='block'>
        <div id='up' className='arrow' onClick={() => selectTableIndex('up')}>
          <AiOutlineArrowUp />
        </div>
      </div>

      <div id='second' className='block'>
        <div
          id='left'
          className='arrow'
          onClick={() => selectTableIndex('left')}
        >
          <AiOutlineArrowLeft />
        </div>

        <div
          id='right'
          className='arrow'
          onClick={() => selectTableIndex('right')}
        >
          <AiOutlineArrowRight />
        </div>
      </div>

      <div id='third' className='block'>
        <div
          id='down'
          className='arrow'
          onClick={() => selectTableIndex('down')}
        >
          <AiOutlineArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Navigator;
