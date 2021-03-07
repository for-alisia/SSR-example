/** Dependencies */
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div>I'm the Home Component!</div>
      <button onClick={() => console.log('Hi, there!')}>Click me!</button>
    </div>
  );
};

/** Export object { component: ..., loadData (if exists)} */
export default { component: HomePage };
