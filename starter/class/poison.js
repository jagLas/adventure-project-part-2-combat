const {Food} = require('./food')

class Poison extends Food {
    constructor(name, description, damageValue){
        super(name, description)
        this.damageValue = damageValue;
    }
}

module.exports = {
    Poison
}