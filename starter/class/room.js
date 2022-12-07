class Room {

  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.exits = {};
    this.items = [];
  }

  getEnemies() {
    const { World } = require('./world');
    return World.getEnemiesInRoom(this);
  }

  printRoom() {
    console.clear();
    console.log("");
    console.log(this.name);
    console.log("");
    console.log(this.description);
    console.log("");
    if (this.getEnemies().length > 0) {
      console.log(`Enemies: ${this.getEnemies().map(enemy => enemy.name).join(", ")}`);
    }
    if (this.items.length > 0) {
      console.log(`Items: ${this.items.map(item => item.name).join(", ")}`);
    }
    console.log(this.getExitsString());
    console.log("");
  }

  getExits() {
    return Object.keys(this.exits);
  }

  getExitsString() {
    return `Exits: ${this.getExits().join(", ")}`
  }

  connectRooms(direction, connectingRoom) {

    // Check if the direction and connecting room are valid
    if (['n', 's', 'e', 'w'].indexOf(direction) < 0 || !connectingRoom) {
      throw new Error("Error: Invalid room connection");
    }

    this.exits[direction] = connectingRoom;
  }

  getRoomInDirection(direction) {
    return this.exits[direction];
  }

  getItemByName(name) {
    let items = this.items;
    let index = null;

    //finds the index for the item by name
    for (let i = 0; i < items.length; i++){
        let item = items[i];
        if (item.name === name) {
            index = i;
        }
    }

    //uses item index to return the item object
    let item = items[index];
    return item;
  }

  getEnemyByName(name) {
    let enemies = this.getEnemies(); //creates array of enemies in room.
    
    //checks the name of each enemy and sets that enemy as target if found
    let target;
    enemies.forEach(enemy => {
      if (enemy.name === name) {
        target = enemy;
      }
    })

    return target;

  }
}

module.exports = {
  Room,
};
