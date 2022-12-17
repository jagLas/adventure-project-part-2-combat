const { expect } = require('chai');

const {Player} = require("../class/player.js");
const {Room} = require("../class/room.js");
const {Item} = require("../class/item.js");
const {Food} = require("../class/food.js");
const {Enemy} = require("../class/enemy.js");
const {Poison} = require('../class/poison.js');

//DO NOT MODIFY ABOVE

let room, item, poison, player, food, enemy;

describe('Poison', function () {

    beforeEach( () => {
        room = new Room("Test Room", "A test room");
        item = new Item("rock", "just a simple rock");
        food = new Food("sandwich", "a delicious looking sandwich");
        poison = new Poison('minor poison', "a noxious poison", 10);
        enemy = new Enemy('enemy', 'an ordinary character', room);
        player = new Player("player", room);
    })


    it('should inherit from food class', function(){
        expect(poison instanceof Food).to.be.true;
        expect(poison instanceof Poison).to.be.true;
        expect(poison instanceof Item).to.be.true;

        expect(food instanceof Food).to.be.true;
        expect(food instanceof Poison).to.be.false;
        expect(food instanceof Item).to.be.true;

        expect(item instanceof Food).to.be.false;
        expect(item instanceof Poison).to.be.false;
        expect(item instanceof Item).to.be.true;
    })

    it('should have a name, description, and damageValue property set at creation', function () {
        expect(poison.name).to.be.equal('minor poison');
        expect(poison.description).to.be.equal('a noxious poison');
        expect(poison.damageValue).to.be.equal(10)
    })

    it('should hurt the player when consumed by the damage properties amount', function (){
        let health = player.health;
        player.eatItem('poison');
        let newHealth = player.health;
        expect(health - newHealth).to.equal(poison.damageValue);
    })

    // it('can be applied to a weapon to increase the damage by its damage property', function () {

    // })
});