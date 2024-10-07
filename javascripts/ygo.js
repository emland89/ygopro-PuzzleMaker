var card_types = [
	'Monster', 'Spell', 'Trap', null, 'Normal', 'Effect', 'Fusion', 'Ritual', 'Trap Monster', 'Spirit', 'Union', 'Gemini', 'Tuner', 'Synchro', null, 'Token',
	'Quick-Play', 'Continuous', 'Equip', 'Field', 'Counter', 'Flip', 'Toon', 'Xyz'
];
var card_attributes = [
	'Earth', 'Water', 'Fire', 'Wind', 'Light', 'Dark', 'Divine'
];
var card_races = [
	'Warrior', 'Spellcaster', 'Fairy', 'Fiend', 'Zombie', 'Machine', 'Aqua', 'Pyro', 'Rock', 'Winged Beast', 'Plant', 'Insect', 'Thunder',
	'Dragon', 'Beast', 'Beast-Warrior', 'Dinosaur', 'Fish', 'Sea Serpent', 'Reptile', 'Psychic', 'Divine-Beast', 'Creator God'
];

var counters = [
	{ "code": "0x3001", "str": "Spell Counter" },
	{ "code": "0x2", "str": "Wedge Counter" },
	{ "code": "0x3003", "str": "Bushido Counter" },
	{ "code": "0x3004", "str": "Psychic Counter" },
	{ "code": "0x5", "str": "Light Counter" },
	{ "code": "0x6", "str": "Crystal Beast Counter" },
	{ "code": "0x7", "str": "Counter (Gladiator Beast's Respite)" },
	{ "code": "0x8", "str": "D Counter" },
	{ "code": "0x9", "str": "Poison Counter" },
	{ "code": "0xa", "str": "Neos Counter" },
	{ "code": "0x300b", "str": "Counter (Ancient Gear Castle)" },
	{ "code": "0xc", "str": "Thunder Counter" },
	{ "code": "0xd", "str": "Greed Counter" },
	{ "code": "0xe", "str": "A Counter" },
	{ "code": "0xf", "str": "Insect Counter" },
	{ "code": "0x10", "str": "Blackwing Counter" },
	{ "code": "0x11", "str": "Hyper Venom Counter" },
	{ "code": "0x12", "str": "Karakuri Counter" },
	{ "code": "0x13", "str": "Chaos Counter" },
	{ "code": "0x14", "str": "Counter (Miracle Jurassic Egg)" },
	{ "code": "0x15", "str": "Ice Counter" },
	{ "code": "0x16", "str": "Magical Stone Counter" },
	{ "code": "0x17", "str": "Acorn Counter" },
	{ "code": "0x18", "str": "Flower Counter" },
	{ "code": "0x19", "str": "Mist Counter" },
	{ "code": "0x1a", "str": "Multiplier Counter" },
	{ "code": "0x1b", "str": "Clock Counter" },
	{ "code": "0x1c", "str": "D Counter" },
	{ "code": "0x1d", "str": "Junk Counter" },
	{ "code": "0x1e", "str": "Gate Counter" },
	{ "code": "0x1f", "str": "Counter (Big Core)" },
	{ "code": "0x20", "str": "Plant Counter" },
	{ "code": "0x21", "str": "Guard Counter" },
	{ "code": "0x22", "str": "Dragon Lord Counter" },
	{ "code": "0x23", "str": "Ocean Counter" },
	{ "code": "0x24", "str": "String Counter" },
	{ "code": "0x25", "str": "Chronicle Counter" },
	{ "code": "0x26", "str": "Counter (Metal Shooter)" },
	{ "code": "0x27", "str": "Counter (Mosquito)" },
	{ "code": "0x3028", "str": "Counter (Dark Archer)" },
	{ "code": "0x29", "str": "Counter (Balloon Lizard)" },
	{ "code": "0x2a", "str": "Counter (Magic Reflector)" },
	{ "code": "0x302b", "str": "Destiny Counter" },
	{ "code": "0x2c", "str": "Obedience Counter" }
];

function getType(card) {
	var result = '';
	var type = card.type;
	for (var i in card_types) {
		if (type & (0x1 << i)) {
			if (result == '')
				result = card_types[i];
			else
				result = result + "|" + card_types[i];
		}
	}
	return result;
}

function getRace(card) {
	var result;
	var race = card.race;
	for (var i in card_races) {
		if (race & (1 << i)) {
			return card_races[i];
		}
	}
}

function getAttribute(card) {
	var result;
	var attribute = card.attribute;
	for (var i in card_attributes) {
		if (attribute & (1 << i)) {
			return card_attributes[i];
		}
	}
}