import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class GeneralContainer extends Component {

    @service('shopping-cart') cart;

}