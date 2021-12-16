import Route from '@ember/routing/route';
import { action } from '@ember/object';
export default class CartRoute extends Route {
  model() {
    const items = [{ price: 10 }, { price: 15 }];
    return items;
  }

  // setupController(controller, model) {
  //     super.setupController(controller, model);
  //     const subtotal = model.reduce((acc, item) => {
  //         return acc + item.price;
  //     }, 0);
  //     controller.set('subtotal', subtotal)

  // }



}
