import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class ProductComponent extends Component {
  productImage = this.args.product.colors[0].image;


  @action
  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }


}
