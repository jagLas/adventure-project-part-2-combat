const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description, currentRoom);
    this.cooldown = 0;
    this.attackTarget = null;
    //uncomment line below to turn on enemy cooldown behavior
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
    }
    this.rest()
  }

  //this seems unecessary as it is inherited from the character class
  // applyDamage(amount) {
  //   // Fill this in
  // }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      // this.scratchNose();
      this.rest();
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
