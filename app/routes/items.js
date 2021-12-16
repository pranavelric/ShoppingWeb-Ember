import Route from '@ember/routing/route';
// import { products } from '../data/products';
export default class ItemsRoute extends Route {
  async model(params) {
    const { item_id } = params;

    const response = await fetch("../api/items.json");
    const { products } = await response.json();



    const product = products.find(({ id }) => id === item_id);
    return product;
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.color = model.colors[0].color;
  }
}
