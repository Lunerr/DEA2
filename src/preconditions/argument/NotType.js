const patron = require('patron.js');

class NotType extends patron.ArgumentPrecondition {
  constructor() {
    super({
      name: 'nottype'
    });
  }

  async run(command, msg, argument, args, value, options) {
    if (options.types.includes(value.type)) {
      if (value.type === 'gun') {
        if (msg.dbUser.inventory[value.bullet] === undefined || msg.dbUser.inventory[value.bullet] <= 0) {
          return patron.PreconditionResult.fromError(command, 'You have no ' + value.bullet + 's to shoot with.');
        }
      }

      msg.bullet = 'inventory.' + value.bullet;
      return patron.PreconditionResult.fromSuccess();
    }

    return patron.PreconditionResult.fromError(command, 'This is not a correct item.');
  }
}

module.exports = new NotType();
