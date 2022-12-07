const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {

    let room = this.currentRoom;
    let item = room.getItemByName(itemName); //finds item name
    this.items.push(item);  //adds item name to player inventory
    room.items.splice(room.items.indexOf(item), 1); //removes item from the room

  }

  dropItem(itemName) {
    let item = this.getItemByName(itemName) //finds item name
    this.currentRoom.items.push(item); //adds item to the room
    this.items.splice(this.items.indexOf(item), 1); //removes item from player inventory

  }

  eatItem(itemName) {

    let item = this.getItemByName(itemName);    //finds item name

    if(item instanceof Food) {  //checks if food
        this.items.splice(this.items.indexOf(item)); //removes item from inventory

    } else {
        console.log(`${itemName} cannot be eaten`);
    }

  }

  getItemByName(name) {

    let items = this.items;

    //finds index for the item by name
    let index = null;
    items.forEach((item, i) => {
        if(item.name === name) {
            index = i;
        }
    })

    //returns the item using the index
    let item = items[index];
    return item;

  }

  hit(name) {
    let target = this.currentRoom.getEnemyByName(name); //finds the target in the room
    target.applyDamage(this.strength);  //attacks target by strength value
    target.attackTarget = this; //sets enemies attack target attribute to the player
    
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
