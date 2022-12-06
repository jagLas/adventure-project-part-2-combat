const { expect } = require('chai');

const {Player} = require("../class/player.js");
const {Room} = require("../class/room.js");
const {Item} = require("../class/item.js");
const {Food} = require("../class/food.js");

const {World} = require("../class/world.js");

const {Character} = require("../class/character.js");
const {Enemy} = require("../class/enemy.js");

//DO NOT MODIFY ABOVE

let character;
let room;
let item;

room =  new Room("Test Room", "A test room");
item = new Item("rock", "just a simple rock");
character = new Character('Character', 'an ordinary character', room);
character.items.push(item);
character.die();