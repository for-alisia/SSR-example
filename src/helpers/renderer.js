/** Dependencies */
import React from 'react';
import { renderToString } from 'react-dom/server'; // render jsx to a string
import { StaticRouter } from 'react-router-dom'; // router for server rendering
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
/** Routes map */
import Routes from '../client/Routes';

export default (req, store) => {
  // Render app to a string
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  // Paste app-string to a simple web-page
  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
  return html;
};
