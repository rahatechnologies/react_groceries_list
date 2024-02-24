import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import { useState } from 'react';

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'Item1',
    },
    {
      id: 2,
      checked: false,
      item: 'Item2',
    },
    {
      id: 3,
      checked: false,
      item: 'Item3',
    },
  ]);

  // const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  // const listItems = numbers.map((number) => (
  //   <li key={number.toString()}>{number}</li>
  // ));

  const handleCheck = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            checked: !item.checked,
          }
        : item
    );

    setItems(updatedItems);
    localStorage.setItem('shoppingList', JSON.stringify(updatedItems));
  };

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);

    setItems(updatedItems);
    localStorage.setItem('shoppingList', JSON.stringify(updatedItems));
  };

  const listItems = items.map((item) => (
    <li className='item' key={item.id}>
      <input
        type='checkbox'
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
        name={item.item}
        id={item.id}
      />
      <label
        style={item.checked ? { textDecoration: 'line-through' } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      {/* <button>Delete</button> */}
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role='button'
        tabIndex='0'
      />
    </li>
  ));

  return (
    <main>
      {items.length ? (
        <ul>{listItems}</ul>
      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
