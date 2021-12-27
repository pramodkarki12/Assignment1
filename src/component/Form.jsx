import React, { useState } from 'react';

const Form = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <form id='form' onSubmit={onSubmit}>
      <label htmlFor='row'>Row</label>
      <input
        type='number'
        id='row'
        name='row'
        value={values.row}
        onChange={handleInputChange}
      />

      <label htmlFor='col'>Column</label>
      <input
        type='number'
        id='col'
        name='col'
        value={values.col}
        onChange={handleInputChange}
      />

      <input className='button' type='submit' value='Create' />
    </form>
  );
};

export default Form;
