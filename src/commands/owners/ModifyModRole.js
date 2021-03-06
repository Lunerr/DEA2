const db = require('../../database');
const patron = require('patron.js');

class ModifyModRole extends patron.Command {
  constructor() {
    super({
      names: ['configuremodrole', 'modifymodrole'],
      groupName: 'owners',
      description: 'Add a mod role.',
      args: [
        new patron.Argument({
          name: 'role',
          key: 'role',
          type: 'role',
          example: 'Moderator'
        }),
        new patron.Argument({
          name: 'permissionLevel',
          key: 'permissionLevel',
          type: 'float',
          example: '2',
          default: 1
        })
      ]
    });
  }

  async run(msg, args) {
    if (args.permissionLevel < 1 || args.permissionLevel > 3) {
      return msg.createErrorReply('Permission levels:\nModerator: 1\nAdministrator: 2\nOwner: 3');
    }

    await db.guildRepo.upsertGuild(msg.guild.id, new db.updates.Push('roles.mod', { id: args.role.id, permissionLevel: args.permissionLevel }));

    return msg.createReply('You have successfully modify\'d the mod role ' + args.role + ' with a permission level of ' + args.permissionLevel + '.');
  }
}

module.exports = new ModifyModRole();
