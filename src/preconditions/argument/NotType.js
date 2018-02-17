const patron = require('patron.js');

class NotType extends patron.ArgumentPrecondition {
  constructor() {
    super({
      name: 'nottype'
    });
  }

  async run(command, msg, argument, args, value, options) {
    if (value.type === options.type) {
      if (options.type === 'gun') {
        if (msg.dbUser.inventory.bullet === undefined || msg.dbUser.inventory.bullet <= 0) {
          return patron.PreconditionResult.fromError(command, 'You have no bullets to shoot with.');
        }
      } else if (options.type === 'launcher') {
        if (msg.dbUser.inventory.rocket === undefined || msg.dbUser.inventory.rocket <= 0) {
          return patron.PreconditionResult.fromError(command, 'You have no rockets to shoot with.');
        }
      }
      return patron.PreconditionResult.fromSuccess();
    } else if (value.type === options.type2) {
      if (options.type2 === 'gun') {
        if (msg.dbUser.inventory.bullet === undefined || msg.dbUser.inventory.bullet <= 0) {
          return patron.PreconditionResult.fromError(command, 'You have no bullets to shoot with.');
        }
      } else if (options.type2 === 'launcher') {
        if (msg.dbUser.inventory.rocket === undefined || msg.dbUser.inventory.rocket <= 0) {
          return patron.PreconditionResult.fromError(command, 'You have no rockets to shoot with.');
        }
      }
      return patron.PreconditionResult.fromSuccess();
    } else if (value.type === options.type3) {
      if (options.type3 === 'gun') {
        if (msg.dbUser.inventory.bullet === undefined || msg.dbUser.inventory.bullet <= 0) {
          return patron.PreconditionResult.fromError(command, 'You have no bullets to shoot with.');
        }
      } else if (options.type3 === 'launcher') {
        if (msg.dbUser.inventory.rocket === undefined || msg.dbUser.inventory.rocket <= 0) {
          return patron.PreconditionResult.fromError(command, 'You have no rockets to shoot with.');
        }
      }
      return patron.PreconditionResult.fromSuccess();
    }

    return patron.PreconditionResult.fromError(command, 'This is not a correct item.');
  }
}

module.exports = new NotType();
