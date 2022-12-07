const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description, currentRoom);
    this.cooldown = 0;
    this.attackTarget = null;
    //line below can be commented to turn on and off enemy behavior
    this.act();
  }

  setPlayer(player) {
    this.player = player;
  }

  randomMove() {
    let exits = this.currentRoom.exits;
    exits = Object.keys(exits);
    // console.log(exits)
    let direction = exits[Math.floor(Math.random() * exits.length)]
    // console.log(this.currentRoom.getRoomInDirection(direction))
    this.currentRoom = this.currentRoom.getRoomInDirection(direction)
    this.cooldown = 3000;
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    this.cooldown += 3000;

    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
      
    };

    setTimeout(resetCooldown.bind(this), this.cooldown);
  }

  attack() {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      this.attackTarget.applyDamage(this.strength);
      console.log(`You have been hit for ${this.strength} damage!`)
    }
    this.rest()
  }

  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (!this.attackTarget) { //checks if it's targeting player
      this.scratchNose();
      this.rest();
    } else {
      this.attack(this.attackTarget); //attacks the player
    }

    // Fill this in
  }

  scratchNose() {

    this.alert(`${this.name} scratches its nose`);

  }
}

module.exports = {
  Enemy,
};
