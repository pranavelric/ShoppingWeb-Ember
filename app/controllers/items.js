import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemsController extends Controller {
  @tracked color = this.model.colors[0].color;

  @tracked isZoomed = true;

  get productImage() {
    return this.model.colors.find(({ color }) => color === this.color).image;
  }

  @action
  changeColor(newColor) {
    this.color = newColor;
  }

  @action
  toggleZoom() {
    this.isZoomed = !this.isZoomed;
  }



}
