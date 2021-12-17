import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class Item {
  @tracked count;
  name;
  color;
  image;
  price;
  constructor(item) {
    this.count = item.count;
    this.color = item.color;
    this.name = item.name;
    this.image = item.image;
    this.price = item.price;
  }
}

export default class ShoppingCartService extends Service {
  @tracked itemlist = [];

  addItem(item) {
    const existingItem = this.itemlist.find(({ name, color }) => {
      return name === item.name && color === item.color;
    });
    if (existingItem) {
      existingItem.count += 1;
    } else {
      this.itemlist = [
        ...this.itemlist,
        new Item({
          ...item,
          count: 1,
        }),
      ];
    }
  }
}
