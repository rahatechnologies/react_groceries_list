import React from 'react';

import { useState } from 'react';

const Content = () => {
  const [namesArray, setNamesArray] = useState([
    'Surya',
    'Soumitra',
    'Koushik',
  ]);

  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    // const index = Math.floor(Math.random() * 3);
    // namesArray.push('rahaTechnologis');
    // return namesArray[index];
  };

  const handleClick = () => {
    console.log('Successfully Clicked!');

    // namesArray.push('rahaTechnologies');
    // console.log(JSON.stringify(namesArray));
    setNamesArray([...namesArray, 'rahaTechnologis']);
  };

  const handleClick2 = (name) => {
    console.log(`${name} Clicked!`);
  };
  const handleClick3 = (e) => {
    // console.log(e.target.innerText);

    // console.log(count);
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };

  return (
    <main>
      {/* <p onDoubleClick={handleClick}>Hello {handleNameChange()}</p> */}

      <button onClick={handleClick}>Click</button>
      {/* <button
        onClick={() => {
          handleClick2(handleNameChange());
        }}
      >
        Click
      </button> */}
      <p>Hello {namesArray}</p>

      <br />
      <br />
      <button onClick={(e) => handleClick3(e)}>Submit form</button>
    </main>
  );
};

export default Content;
