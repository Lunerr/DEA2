const patron = require('patron.js');

class Store extends patron.Command {
  constructor() {
    super({
      names: ['store'],
      groupName: 'items',
      description: 'Display\'s the purchasable items within the shop.'
    });
  }

  async run(msg, args) {
    return msg.channel.createMessage('**Purchasable Items:**' + '\nOld Crate: $50.00\nBronze Crate: $1,000.00\nSilver Crate: $5,000.00\nGold Crate: $20,000.00\nPlatinum Crate: $50,000.00\nRuby Crate: $750,000.00\nEmerald Crate: $850,000.00\nSapphire Crate: $900,000.00\nRainbow Crate: $127,500,000.00\nWhite Crate: $500,000,000.00\nBlack Crate: $500,000,000.00\nHot Crate: $666,666,666.00\nCool Crate: $777,777,777.00');
  }
}

module.exports = new Store();
