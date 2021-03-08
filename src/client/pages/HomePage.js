/** Dependencies */
import React from 'react';

const HomePage = () => {
  return (
    <div className="container">
      <div className="center-align" style={{ marginTop: '100px' }}>
        <h3> Server Side React Rendering </h3>
        <h5>No frameworks were used</h5>
      </div>
      <div style={{ marginTop: '100px' }}>
        <p>USER's endpoint: get users from API server</p>
        <p>ADMIN's endpoint: get admins from API server - protected route</p>
        <p>AUTH's endpoint: allows to login and logout using Google Auth API (server side auth)</p>
      </div>
    </div>
  );
};

/** Export object { component: ..., loadData (if exists)} */
export default { component: HomePage };
