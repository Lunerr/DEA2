const MemberService = require('../services/MemberService.js');
const client = require('../singletons/client.js');

client.on('guildMemberAdd', () => {
  (async (member) => {
    return MemberService.join(member);
  })()
    .catch((err) => Logger.handleError(err));
});
