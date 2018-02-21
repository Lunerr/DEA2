const patron = require('patron.js');
const ItemService = require('../../services/ItemService.js');

class Item extends patron.Command {
  constructor() {
    super({
      names: ['item', 'weapon', 'meat', 'gun', 'knife'],
      groupName: 'items',
      description: 'Search for an item\'s information.',
      args: [
        new patron.Argument({
          name: 'item',
          key: 'item',
          type: 'item',
          example: 'bear grylls meat',
          remainder: true
        })
      ]
    });
  }

  async run(msg, args) {
    const unwantedKeys = ['names', 'description', 'type'];
    let description = '**Description:** ' + args.item.description + '\n**Type:** ' + ItemService.capitializeWords(args.item.type) + '\n';

    for (const key in args.item) {
      if (unwantedKeys.includes(key) === false) {
        description += '**' + ItemService.capitializeWords(key) + ':** ' + ItemService.capitializeWords(args.item[key]) + '\n';
      }
    }

    return msg.channel.createMessage(description, { title: ItemService.capitializeWords(args.item.names[0]) });
  }
}

module.exports = new Item();
