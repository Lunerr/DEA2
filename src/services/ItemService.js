const db = require('../database');
const Random = require('../utility/Random.js');
const Constants = require('../utility/Constants.js');
const items = require('../data/items.json');

class ItemService {
  async openCrate(crate) {
    const roll = Random.roll();
    const rollWeapon = Random.nextInt(1, 747);
    const rollAmmo = Random.nextInt(1, 340);
    const weapons = items.filter(x => x.type === 'gun' || x.type === 'knife').sort((a, b) => a.crate_odds - b.crate_odds);
    const ammunation = items.filter(x => x.type === 'bullet').sort((a, b) => a.crate_odds - b.crate_odds);
    let cumulativeWeapons = 0;
    let cumulativeAmmunition = 0;

    if (roll <= crate.item_odds) {
      for (let i = 0; i < weapons.length; i++) {
        const weapon = weapons[i];
        cumulativeWeapons += weapon.crate_odds;
        if (rollWeapon <= cumulativeWeapons) {
          return weapon;
        }
      }
    } else {
      for (let i = 0; i < ammunation.length; i++) {
        const ammo = ammunation[i];
        cumulativeAmmunition += ammo.crate_odds;
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
    const food = items.filter(x => x.type === 'fish').sort((a, b) => a.acquire_odds - b.acquire_odds);
    const rollOdds = Random.nextInt(1, 109);
    let cumulative = 0;

    if (roll <= weapon.accuracy) {
      for (let i = 0; i < food.length; i++) {
        const fish = food[i];
        cumulative += fish.acquire_odds;
        if (rollOdds <= cumulative) {
          return fish;
        }
      }
    }
  }

  hunt(weapon) {
    const roll = Random.roll();
    const food = items.filer(x => x.type === 'meat').sort((a, b) => a.acquire_odds - b.acquire_odds);
    const rollOdds = Random.nextInt(1, 84);
    let cumulative = 0;

    if (roll <= weapon.accuracy) {
      for (let i = 0; i < food.length; i++) {
        const meat = food[i];
        cumulative += meat.acquire_odds;
        if (rollOdds <= cumulative) {
          return meat;
        }
      }
    }
  }

  reduceDamage(dbUser, damage) {
    const armours = items.filter(x => x.type === 'armour');
    let reduce = damage;
    
    for (let i = 0; i < armours.length; i++) {
      if (dbUser.inventory[armours[i].names[0]] !== undefined || dbUser.inventory[armours[i].names[0]] > 0) {
        reduce *= (100 - armours[i].damageReduction) / 100;
      }
    }

    return reduce;
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
    if (isNaN(str)) {
      return str.replace('_', ' ').replace(Constants.data.regexes.capitalize, (x) => x.charAt(0).toUpperCase() + x.substr(1));
    }

    return str;
  }
}

module.exports = new ItemService();
