const patron = require('patron.js');
const Constants = require('../utility/Constants.js');

class TypeTypeReader extends patron.TypeReader {
  constructor() {
    super({ type: 'type' });
  }

  async read(command, message, argument, args, input) {
    if (Constants.items.types.includes(input.toLowerCase())) {
      return patron.TypeReaderResult.fromSuccess(input);
    }

    return patron.TypeReaderResult.fromError(command, 'There is no such item type such as ' + input + '.');
  }
}

module.exports = new TypeTypeReader();
