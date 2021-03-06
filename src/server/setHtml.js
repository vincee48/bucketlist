import { match } from 'react-router';
import getRoutes from '../routes';
import configureStore from '../store/configureStore';
import getHtml from './getHtml';

module.exports = function setHtml(req, res) {
  const store = configureStore();
  match({
    routes: getRoutes(store, req),
    location: req.url,
  }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`);
    } else if (renderProps) {
      getHtml(req, res, renderProps, store);
    } else {
      res.status(404);
    }
  });
};
