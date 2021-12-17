import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class GeneralContainer extends Component {
  @service('shopping-cart') cart;

  get itemCount() {
    return this.cart.itemlist.reduce((total, item) => {
      total = Number(total);
      return (total += Number(item.count));
    }, 0);
  }
}
