import EmberRouter from '@ember/routing/router';
import config from 'shopping/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('not-found', { path: '/*path' });
  this.route('items', { path: '/items/:item_id' });
  this.route('cart');
});
