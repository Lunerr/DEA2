const db = require('../database');
const client = require('../singletons/client.js');

client.on('guildMemberUpdate', () => {
  (async (oldMember, newMember) => {
  })()
    .catch((err) => Logger.handleError(err));
});
