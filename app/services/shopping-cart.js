import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ShoppingCartService extends Service {
    @tracked itemlist = [];

    addItem(item) {
        console.log(item);
        this.itemlist = [...this.itemlist, item];
    }


}
