import Route from '@ember/routing/route';
// import { products } from '../data/products';
import { inject as service } from '@ember/service';
export default class IndexRoute extends Route {

  @service store;

  async model() {

    // const products = await this.store.findAll('product');

    // const response = await fetch('../api/products.json');
    // const { products } = await response.json();



    return this.store.findAll('product');
  }
}
