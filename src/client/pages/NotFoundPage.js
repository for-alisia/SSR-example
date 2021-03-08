import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  // @ts-ignore
  staticContext.notFound = true;
  return (
    <div className="container center-align">
      <h1> Ooops, route not found</h1>
    </div>
  );
};

export default { component: NotFoundPage };
