const {Weapon} = require('../class/weapon');
const {expect} = require('chai');
const { Item } = require('../class/item');
const {Player} = require("../class/player.js");
const {Room} = require("../class/room.js");
const {Enemy} = require("../class/enemy.js");

describe('Weapon class', function (){

    beforeEach( () => {
        room = new Room("Test Room", "A test room");
        item = new Item("rock", "just a simple rock");
        enemy = new Enemy('enemy', 'an ordinary character', room);
        player = new Player("player", room);
        weapon = new Weapon('sword', 'an ordinary sword', 10);
    })

    it ('should inherit from the Item class', function (){
        expect(weapon instanceof Weapon).to.be.true;
        expect(weapon instanceof Item).to.be.true;

        expect(item instanceof Weapon).to.be.false;
        expect(item instanceof Item).to.be.true;
    })

    it ('should set name, description, and damageValue properties upon creation', function () {
        expect(weapon.name).to.equal('sword');
        expect(weapon.description).to.equal('an ordinary sword');
        expect(weapon.damageValue).to.equal(10);
    })


    //neds to debug why not hitting enemy
    it ('should increase the damage of an attack when held by a player', function (){
        let initialHealth = enemy.health;
        player.hit('enemy');
        let firstAttack = initialHealth - enemy.health;
        player.takeItem('sword');
        let secondHealth = enemy.health;
        player.hit('enemy');
        let secondAttack = secondHealth - enemy.health;

        expect(secondAttack).to.equal(firstAttack + weapon.damageValue);
    })

    it('should have a method modifyDamage(num) that changes the damage value', function (){
        let initial = weapon.damageValue;
        weapon.modifyDamageValue(10);
        expect(weapon.damageValue).to.equal(initial + 10);
    })
})