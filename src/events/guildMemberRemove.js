const client = require('../singletons/client.js');

client.on('guildMemberRemove', () => {
  (async (member) => {
  })()
    .catch((err) => Logger.handleError(err));
});
