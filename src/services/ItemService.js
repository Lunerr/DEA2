const db = require('../database');
const Random = require('../utility/Random.js');
const Constants = require('../utility/Constants.js');
const items = require('../data/items.json');

class ItemService {
  async openCrate(crate) {
    const roll = Random.roll();
    const rollWeapon = Random.nextInt(1, 747);
    const rollAmmo = Random.nextInt(1, 101);
    const weapons = Constants.items.crateItems.sort((a, b) => a.crateOdds - b.crateOdds);
    const ammunation = Constants.items.ammunation.sort((a, b) => a.crateOdds - b.crateOdds);
    let cumulativeWeapons = 0;
    let cumulativeAmmunition = 0;

    if (roll <= crate.itemOdds) {
      for (let i = 0; i < weapons.length; i++) {
        const weapon = weapons[i];
        cumulativeWeapons += weapon.crateOdds;
        if (rollWeapon <= cumulativeWeapons) {
          return weapon;
        }
      }
    } else {
      for (let i = 0; i < ammunation.length; i++) {
        const ammo = ammunation[i];
        cumulativeAmmunition += ammo.crateOdds;
        if (rollAmmo <= cumulativeAmmunition) {
          return ammo;
        }
      }
    }
  }

  async massOpenCrate(quanity, crate) {
    const itemsWon = {};

    for (let i = 0; i < quanity; i++) {
      const item = await this.openCrate(crate);

      if (itemsWon.hasOwnProperty(item.names[0]) === false) {
        itemsWon[item.names[0]] = 0;
      }

      itemsWon[item.names[0]]++;
    }
    return itemsWon;
  }

  fish(weapon) {
    const roll = Random.roll();
    const food = Constants.items.fish.sort((a, b) => a.acquireOdds - b.acquireOdds);
    const rollOdds = Random.nextInt(1, 109);
    let cumulative = 0;

    if (roll <= weapon.accuracy) {
      for (let i = 0; i < food.length; i++) {
        const fish = food[i];
        cumulative += fish.acquireOdds;
        if (rollOdds <= cumulative) {
          return fish;
        }
      }
    }
  }

  hunt(weapon) {
    const roll = Random.roll();
    const food = Constants.items.meat.sort((a, b) => a.acquireOdds - b.acquireOdds);
    const rollOdds = Random.nextInt(1, 84);
    let cumulative = 0;

    if (roll <= weapon.accuracy) {
      for (let i = 0; i < food.length; i++) {
        const meat = food[i];
        cumulative += meat.acquireOdds;
        if (rollOdds <= cumulative) {
          return meat;
        }
      }
    }
  }

  reduceDamage(dbUser, damage) {
    const armours = items.filter((x) => x.type === 'armour');
    let reduce = damage;
    
    for (let i = 0; i < armours.length; i++) {
      if (dbUser.inventory[armours[i].names[0]] !== undefined || dbUser.inventory[armours[i].names[0]] > 0) {
        reduce *= (100 - armours[i].damageReduction) / 100;
      }
    }

    return reduce;
  }

  async getArmour(memberId, guildId, damage) {
    const dbUser = await db.userRepo.getUser(args.member.id, msg.guild.id);
    const armour = items.find((x) => x.type === 'armour');

    for (const key in dbUser.inventory) {
      const s = (dbUser.inventory[key] > 1 ? 's' : '');
      description += (dbUser.inventory[key] > 0 ? ItemService.capitializeWords(key) + s + ': ' + dbUser.inventory[key] + '\n' : '');
    }
  }

  async takeInv(KillerId, DeadUserId, GuildId) {
    const dbUser = await db.userRepo.getUser(DeadUserId, GuildId);
    for (const key in dbUser.inventory) {
      const itemsGained = 'inventory.' + key;
      const amount = dbUser.inventory[key];
      await db.userRepo.updateUser(KillerId, GuildId, { $inc: { [itemsGained]: amount } });
    }
  }

  capitializeWords(str) {
    return str.replace(Constants.data.regexes.capitalize, (x) => x.charAt(0).toUpperCase() + x.substr(1));
  }
}

module.exports = new ItemService();
