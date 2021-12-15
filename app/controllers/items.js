import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ItemsController extends Controller {

    @tracked color = 'black';

    get productImage() {
        return '/assets/images/beats-solo-' + this.color + '.png';
    }

    @action
    changeColor(newColor) {
        this.color = newColor;
    }

}
