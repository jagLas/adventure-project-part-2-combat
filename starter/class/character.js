class Character {

  constructor(name, description, currentRoom) {
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = [];
    this.strength = 10;
    this.health = 100;
  }

  applyDamage(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
    }
    return;
  }

  die() {
    let inventory = this.items;

    while (inventory.length > 0) {
      this.currentRoom.items.push(inventory[0]);
      inventory.shift();
    }

    this.currentRoom = null;
  }
  
}

module.exports = {
  Character,
};
