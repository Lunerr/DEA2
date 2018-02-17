const db = require('../../database');
const Constants = require('../../utility/Constants.js');
const patron = require('patron.js');
const NumberUtil = require('../../utility/NumberUtil.js');

class ItemLb extends patron.Command {
  constructor() {
    super({
      names: ['itemleaderboards', 'itemlb', 'itemleaderboard'],
      groupName: 'general',
      description: 'View the richest Drug Traffickers.'
    });
  }

  async run(msg) {
    const users = await db.userRepo.findMany({ guildId: msg.guild.id });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    users.sort((a, b) => Object.values(b.inventory).reduce(reducer) - Object.values(a.inventory).reduce(reducer));

    let message = '';

    for (let i = 0; i < users.length; i++) {
      if (i + 1 > Constants.config.misc.leaderboardCap) {
        break;
      }

      const user = msg.client.users.get(users[i].userId);

      if (user === undefined) {
        continue;
      }

      message += (i + 1) + '. ' + user.tag.boldify() + ': ' + Object.values(users[i].inventory).reduce(reducer) + '\n';
    }

    if (String.isNullOrWhiteSpace(message) === true) {
      return msg.createErrorReply('There is nobody on the leaderboards.');
    }

    return msg.channel.createMessage(message, { title: 'The Item Leaderboards' });
  }
}

module.exports = new ItemLb();
