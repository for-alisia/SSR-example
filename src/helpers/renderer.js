/** Dependencies */
import React from 'react';
import { renderToString } from 'react-dom/server'; // render jsx to a string
import { StaticRouter } from 'react-router-dom'; // router for server rendering
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';
/** Routes map */
import Routes from '../client/Routes';

export default (req, store, context) => {
  // Render app to a string
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>
          {renderRoutes(
            // @ts-ignore
            Routes
          )}
        </div>
      </StaticRouter>
    </Provider>
  );
  // Paste app-string to a simple web-page
  const html = `
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
      </head>
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
