const {Item} = require('./item')

class Weapon extends Item {
    constructor (name, description, damageValue) {
        super (name, description);
        this.damageValue = damageValue;
    }

    modifyDamage(num) {
        if (typeof num === 'number') {
            this.damageValue += num;
        }
    }
}

module.exports = {Weapon}