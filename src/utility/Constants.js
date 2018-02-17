const db = require('../database');

class Constants {
  constructor() {
    this.data = {
      colors: {
        ban: [234, 12, 0],
        clear: [0, 29, 255],
        defaults: [
          [255, 38, 154],
          [0, 255, 0],
          [0, 232, 40],
          [8, 248, 255],
          [242, 38, 255],
          [255, 28, 142],
          [104, 255, 34],
          [255, 190, 17],
          [41, 84, 255],
          [150, 36, 237],
          [168, 237, 0]
        ],
        chill: [255, 92, 17],
        error: [255, 0, 0],
        kick: [232, 81, 31],
        mute: [255, 114, 14],
        unban: [19, 255, 25],
        unmute: [109, 237, 94],
        unchill: [91, 283, 53],
        warn: [255, 182, 32]
      },

      links: {
        botInvite: 'https://discordapp.com/api/oauth2/authorize?client_id=346848517186125834&scope=bot&permissions=8',
        documentation: 'https://marathxnz.github.io/DEA2-Better/commands/',
        serverInvite: 'https://discord.gg/ATpswm8'
      },

      messages: {
        jump: [
          'You were walking down the street when some homeless guy walked up to you, and then as you were giving him 17 cents you see the cracker has {0} worth of extra large socks stacked up behind him, so you jacked them.',
          'After a nice bust at the local strip club, you were walking home when you spotted Judge Woody, the cracker who busted you last week, sitting on a bench. You decided to jump his fatass, snipe {0} from his wallet, and walk away unharmed.',
          'You jump some dick that got you in court last month, stole his pants and ran. Turns out those pants were worth {0}.',
          'You decide to waltz over to Compton to show your strength. Fortunately, you found some wallet some guy dropped in a gang fight. The wallet didn\'t have jack inside of it, but the it turns out the leather it was made of was worth {0}.'
        ],
        lottery: [
          'CONGRATS MY MAN, you just won {0} in the goddamn lottery! Use `$info` for more information.',
          'Hot fucking pockets, you just won {0} in the lottery! Use `$info` for more information.',
          'Well sonny, looks like today is your goddamn lucky day, you just won {0} in the lottery! Use `$info` for more information.',
          'Jiminy Crickets, you made some bank! You just won {0} from the lottery! Use `$info` for more information.',
          'Sweet Baby Jesus you just won {0} in the fucking lottery! Use `$info` for more information.',
          'Well I\'ll be damned, you just won {0} in the goddamn lottery! Use `$info` for more information.'
        ],
        scam: [
          'You ripped some grass off the ground, went up to some gangster and sold it to him as weed. He gave you {0} for it, and you got out of there before he noticed anything.',
          'You knocked on your neighbor\'s door, asked for some flour to bake a cake, and you sold it to your other neighbor as cocaine. You managed to make {0}.',
          'You bought a Monopoly board game, took the fake cash, went to the bank and traded it for USD. You walked away with {0}, moved to Cuba, while the US government was chasing you down.',
          'You waited in line for some new Adidas Yeezys, bought 10 pairs and sold them to your idiot friends for {0}. Hopefully they won\'t notice your scam.'
        ],
        steal: [
          'You and a couple of buddies decide to go bust out the fake nerf guns, stroll over to your local {0}, and rob their asses. You got {1} for your share.',
          'While you were shopping at {0}, you thought it was a good idea to nut all over the counter. The owner decided to sauce you {1} because he assumed the cum was toxic.'
        ],
        stores: [
          '7-Eleven', 'Speedway', 'Couche-Tard', 'QuikTrip', 'Kroger', 'Circle K', 'Admiral Petroleum', 'Big Apple', 'Bucky\'s Express'
        ]
      },

      misc: {
        disabledEvents: [
          'CHANNEL_PINS_UPDATE',
          'MESSAGE_UPDATE',
          'MESSAGE_REACTION_ADD',
          'MESSAGE_REACTION_REMOVE',
          'MESSAGE_REACTION_REMOVE_ALL',
          'VOICE_STATE_UPDATE',
          'TYPING_START',
          'VOICE_SERVER_UPDATE',
          'RELATIONSHIP_ADD',
          'RELATIONSHIP_REMOVE'
        ],
        game: '$help',
        prefix: '$',
        botOwner: ["lyroo#0042", "Luner#0059"],
        ownerIds: ["290741353002958848", "226736342745219072"]
      },

      regexes: {
        capitalize: /\w\S*/g,
        escape: /[-[\]{}()*+?.,\\/^$|#\s]/g,
        prefix: /^\$/
      }
    };

    this.guildSettings = {
      maxPrefix: 1
    }

    this.items = {
      suicide: {
        cost: 1500
      },

      armour: {
        'names': ['kevlar', 'armour', 'armor'],
        'type': 'armour',
        'description': 'You won\'t even feel the bullet wearing this thing.',
        'damageReduction': 20,
        'crateOdds': 30
      },

      crateItems: [
        {
          'names': ['kevlar', 'armour', 'armor'],
          'type': 'armour',
          'description': 'You won\'t even feel the bullet wearing this thing.',
          'damageReduction': 20,
          'crateOdds': 30
        },
        {
          'names': ['glock'],
          'type': 'gun',
          'description': 'Weakest gun in town. Man up a bit you puss.',
          'damage': 15,
          'accuracy': 30,
          'crateOdds': 40
        },
	    {
		"names": ["rusty pistol"],
		"type": "gun",
		"description": "This pistol was found in an ocean. Covered in rust, seems if it would never work",
		"damage": 1,
		"accuracy": 1,
		"crateOdds": 99
		},
		{
          'names': ["water gun"],
          'type': 'gun',
          'description': "Dylan got wet boi",
          'damage': 99,
          'accuracy': 99,
          'crateOdds': 0
        },
        {
          "names": ["pump action", "pump"],
          "type": "gun",
          "description": "Get those niggers off your lawn, *wait that was racist, fuck*.",
          "damage": 60,
          "accuracy": 35,
          "crateOdds": 35
        },        
        {
          'names': ['revolver'],
          'type': 'gun',
          'description': 'Slam a nigga\'s cock in a bridge so damn hard.',
          'damage': 20,
          'accuracy': 35,
          'crateOdds': 30
        },
        {
          "names": ["m1911", "1911"],
          "type": "gun",
          "description": "The only gun that proves you are a male.",
          "damage": 50,
          "accuracy": 40,
          "crateOdds": 28
        },
        {
          'names': ['ar15'],
          'type': 'gun',
          'description': 'Assault fire. Assault weapon. Assault feminists. *Oh fuck dude I don\'t think we are allowed to put that kinda joke.*',
          'damage': 40,
          'accuracy': 50,
          'crateOdds': 25
        },
        {
          "names": ["ak-47", "ak47"],
          "type": "gun",
          "description": "***Starts playing the National anthem of Russia.***",
          "damage": 50,
          "accuracy": 60,
          "crateOdds": 23
        },  
        {
          "names": ["desert eagle", "deagle"],
          "type": "gun",
          "description": "The only gun you can tear off a head with.",
          "damage": 50,
          "accuracy": 45,
          "crateOdds": 20
        },
        {
          "names": ["barrett M107A1", "barrett", "barrett 50 cal", "barrett .50 cal"],
          "type": "gun",
          "description": "If you spray this then that confirms you have a tiny pecker.",
          "damage": 75,
          "accuracy": 65,
          "crateOdds": 10
        },
        {
          'names': ['intervention'],
          'type': 'gun',
          'description': 'The only weapon that affirms you have a large penis.',
          'damage': 90,
          'accuracy': 75,
          'crateOdds': 3
        },
        {
          "names": ["rocket launcher", "launcher"],
          "type": "launcher",
          "description": "HELL YEAH BLOW THAT NIGGER UP *wait fuck that's racist.*",
          "damage": 105,
          "accuracy": 70,
          "crateOdds": 2
        },  
        {
          'names': ['kitchen knife'],
          'type': 'knife',
          'description': 'Enough to catch your granny off guard when she is taking a nap.',
          'damage': 5,
          'accuracy': 20,
          'crateOdds': 75
        },
	    {
		"names": ["rusty knife"],
		"type": "knife",
		"description": "Found this in a lake, seems if someone used it for murder than left the knife to rust.",
		"damage": 1,
		"accuracy": 1,
		"crateOdds": 99
		},
		{
		"names": ["dildo"],
		"type": "knife",
		"description": "Generic sex toy, seems sticky",
		"damage": 25,
		"accuracy": 30,
		"crateOdds": 42
		},
		{
		"names": ["dragon dildo"],
		"type": "knife",
		"description": "Big Man's sex you. May leave a gaping hole.",
		"damage": 65,
		"accuracy": 65,
		"crateOdds": 30
		},
		{
		"names": ["pink dragon dildo"],
		"type": "knife",
		"description": "Only a real man plays with this bad boy.",
		"damage": 95,
		"accuracy": 80,
		"crateOdds": 5
		},
	    {
		"names": ["hatchet"],
		"type": "knife",
		"description": "An axe for wimps",
		"damage": 30,
		"accuracy": 25,
		"crateOdds": 50
		},
	    {
		"names": ["axe"],
		"type": "knife",
		"description": "Time to hunt some bear.",
		"damage": 45,
		"accuracy": 30,
		"crateOdds": 40
		},
	    {
		"names": ["golden axe"],
		"type": "knife",
		"description": "Axe but made from gold.",
		"damage": 70,
		"accuracy": 45,
		"crateOdds": 25
		},
	    {
		"names": ["sledgehammer"],
		"type": "knife",
		"description": "CRUSH the skulls of your enemies.",
		"damage": 65,
		"accuracy": 50,
		"crateOdds": 30
		},
        {
          'names': ['butterfly knife'],
          'type': 'knife',
          'description': 'Tell em its to cut the butterflies out of their stomach.',
          'damage': 10,
          'accuracy': 45,
          'crateOdds': 35
        },
        {
          'names': ['m9 bayonet', 'm9'],
          'type': 'knife',
          'description': 'Whip it out quicker than you can bust a nut, which is like 0.002 seconds.',
          'damage': 20,
          'accuracy': 55,
          'crateOdds': 25
        },
        {
          "names": ["shovel"],
          "type": "knife",
          "description": "Emily don't! Oh my gooooddddd.",
          "damage": 35,
          "accuracy": 55,
          "crateOdds": 20
        },
        {
          "names": ["gladiator sword", "gladiator"],
          "type": "knife",
          "description": "THIS IS __***SPARTA***__",
          "damage": 50,
          "accuracy": 60,
          "crateOdds": 15
        },
        {
          "names": ["karambit", "karambit knife"],
          "type": "knife",
          "description": "Prestige pouring out left and right.",
          "damage": 45,
          "accuracy": 70,
          "crateOdds": 10
        },
        {
          "names": ["katana", "samurai sword"],
          "type": "knife",
          "description": "Oni-chan no!",
          "damage": 50,
          "accuracy": 80,
          "crateOdds": 6
        },
		{
          "names": ["water knife"],
          "type": "knife",
          "description": "I STABB U WITH MY WATER OOOOOOOH",
          "damage": 99,
          "accuracy": 99,
          "crateOdds": 0
        },
        {
          'names': ['huntsman knife', 'huntsman'],
          'type': 'knife',
          'description': 'This knife didn\'t get it\'s name for cutting pie.',
          'damage': 55,
          'accuracy': 90,
          'crateOdds': 3
        }
      ],

      fish: [
        {
          'names': ['sardine'],
          'type': 'fish',
          'description': 'Narly stuff.',
          'acquireOdds': 30,
          'health': 15
        },
		{
	   	  "names": ["nemo"],
	   	  "type": "fish",
		  "description": "How did he escape from my toilet?",
	 	  "acquireOdds": 24,
		  "health": 20
		},
        {
          'names': ['shrimp'],
          'type': 'fish',
          'description': 'Dip in some fancy sauce to look fancy.',
          'acquireOdds': 20,
          'health': 20
        },
        {
          'names': ['swordfish'],
          'type': 'fish',
          'description': 'Pointy nose, might kill.',
          'acquireOdds': 10,
          'health': 30
        },
        {
          "names": ["octopus"],
          "type": "fish",
          "description": "Sticky but tasty, along with its family.",
          "acquireOdds": 10,
          "health": 35
        },
        {
          "names": ["whale"],
          "type": "fish",
          "description": "Fat fuck got spanked before killed.",
          "acquireOdds": 6,
          "health": 40
        },
        {
          "names": ["shark"],
          "type": "fish",
          "description": "Better be careful when eating this.",
          "acquireOdds": 3,
          "health": 50
        }
      ],

      meat: [
        {
          'names': ['beef'],
          'type': 'meat',
          'description': 'For the weak.',
          'acquireOdds': 30,
          'health': 15
        },
        {
          'names': ['chicken'],
          'type': 'meat',
          'description': 'Slightly appetizing if you are black.',
          'acquireOdds': 20,
          'health': 20
        },
        {
          "names": ["pork"],
          "type": "meat",
          "description": "Yeet fucked those pigs up.",
          "acquireOdds": 15,
          "health": 25
        },
        {
          "names": ["lion"],
          "type": "meat",
          "description": "Lil fucker was fast.",
          "acquireOdds": 10,
          "health": 30
        },
        {
          "names": ["bear meat", "bear"],
          "type": "meat",
          "description": "Better be worth it, was hard to get.",
          "acquireOdds": 6,
          "health": 35
        },
		{
		  "names": ["water"],
		  "type": "meat",
		  "description": "Drink up big man",
		  "acquireOdds": 0,
		  "health": 99
		},
        {
          'names': ['bear grylls meat', 'bear grylls'],
          'type': 'meat',
          'description': 'Literally from the man himself.',
          'acquireOdds': 5,
          'health': 50
        }
      ],

      ammunation: [
        {
          "names": ["rocket", "rockets"],
          "type": "bullet",
          "description": "Lmao blow those bastards up with this ammunation.",
          "crateOdds": 10
        },
        {
          "names": ["bullet", "bullets"],
          "type": "bullet",
          "description": "You can't shoot a gun without bullets, or **CAN YOU?** No Steve, you fucking can't. Retard.",
          "crateOdds": 90
        }  
      ]
    };

    this.config = {
      bounty: {
        min: 500
      },

      polls: {
        elderTimeRequired: 172800000,
        maxAnswers: 6,
        maxAnswerChar: 20,
        maxChar: 40
      },

      stab: {
        cooldown: 14400000
      },

      shoot: {
        cooldown: 14400000
      },

      fish: {
        cooldown: 900000
      },

      hunt: {
        cooldown: 900000
      },

      opencrate: {
        cooldown: 60000
      },

      bully: {
        cooldown: 60000,
        maxLength: 32
      },

      gang: {
        min: 500,
        maxChar: 24,
        cooldownRaid: 28800000,
        cooldownWithdraw: 14400000,
        creationCost: 2500,
        nameChange: 500,
        raidOdds: 80
      },

      poll: {
        maxChar: 80
      },

      enslave: {
        cooldown: 7200000,
        odds: 20,
        killOwner: 30
      },

      collect: {
        cooldown: 86400000
      },

      rob: {
        cooldown: 2880000,
        max: 0.2,
        min: 500,
        odds: 60
      },

      shootowner: {
        cooldown: 86400000,
        odds: 1
      },

      username: {
        minLength: 4,
        maxLength: 14
      },

      nsfw: {
        max: 20,
        min: 1,
        cooldown: 60000
      },

      chill: {
        max: 120,
        min: 5,
        defaultValue: 30
      },

      clear: {
        max: 100,
        min: 2
      },

      gambling: {
        minBet: 5
      },

      intervals: {
        autoUnmute: 60000,
        autoRemovePoll: 60000
      },

      jump: {
        cooldown: 14400000,
        max: 500,
        min: 1000,
        odds: 85
      },

      kill: {
        cooldown: 86400000
      },

      lottery: {
        max: 100,
        min: 1000,
        odds: 1.25,
        lotteryOddsMultiplier: 1
      },

      misc: {
        cashPerMessage: 50,
        leaderboardCap: 10,
        messageCooldown: 15000,
        minCharLength: 4,
        messageMultiplier: 1
      },

      mute: {
        defaultLength: 24
      },

      scam: {
        cooldown: 7200000,
        max: 100,
        min: 500,
        odds: 90
      },

      steal: {
        cooldown: 21600000,
        max: 1000,
        min: 2500,
        odds: 80
      },

      top50: {
        messageMultiplier: 1.5
      },

      transfer: {
        cut: 0.1,
        min: 5
      }
    };

    this.towers = {
      chipper: {
        price: 440,
        leftside: {
          tier1: 150,
          tier2: 250,
          tier3: 500,
          tier4: 4000
        },
        rightside: {
          tier1: 200,
          tier2: 400,
          tier3: 2500,
          tier4: 4000
        }
      }
    };

    this.conversions = {
      secondInMs: 1000,
      minuteInMs: 60000,
      hourInMs: 3600000,
      dayInMs: 86400000,
      weekInMs: 604800000,
      monthInMs: 2592000000,
      yearInMs: 31536000000,
      decadeInMs: 315360000000,
      centuryInMs: 3153600000000
    };
  }
}

module.exports = new Constants();
