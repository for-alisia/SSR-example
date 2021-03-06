/** Server code */
/** Dependencies */
import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import Routes from './client/Routes';

const app = express();

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      // @ts-ignore
      opts.headers['x-forwarded-host'] = 'localhost:3000';
      return opts;
    },
  })
);

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(req);
  // Get promises from Routes
  // @ts-ignore
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      // @ts-ignore
      return route.loadData ? route.loadData(store) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  // After fetching data send a response
  Promise.all(promises).then(() => {
    const context = {};
    const renderedContent = renderer(req, store, context);
    if (context.url) {
      return res.redirect(303, context.url);
    }
    if (context.notFound) {
      res.status(404);
    }
    res.send(renderedContent);
  });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
