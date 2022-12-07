const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description, currentRoom);
    this.cooldown = 0;
    this.attackTarget = null;
    //line below can be commented to turn on and off enemy behavior
    this.rest();
  }

  setPlayer(player) {
    this.player = player;
  }

  randomMove() {
    //creates available movements commands
    let exits = this.currentRoom.exits;
    exits = Object.keys(exits);

     //randomly chooses from exits
    let direction = exits[Math.floor(Math.random() * exits.length)]

    //alerts the player it left the room and which direction
    if (this.player && this.player.currentRoom === this.currentRoom) {
      let dirName;
      const dirNames = ['north', 'south', 'east', 'west']

      dirNames.forEach(dir => {
        if (dir.startsWith(direction)) {
          dirName = dir;
        }
      })

      console.log(`The ${this.name} left the room going ${dirName}.`);
    }

    //moves in the random direction
    this.currentRoom = this.currentRoom.getRoomInDirection(direction);

    //tells the player if the enemy enters their room
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(`The ${this.name} enters the room.`)
    }

    this.rest();
  }

  takeSandwich() {
    let item = this.currentRoom.getItemByName('sandwich');
    if (item === undefined) {

    } else {
        this.items.push(item);  //adds item name to player inventory
        this.currentRoom.items.splice(this.currentRoom.items.indexOf(item), 1); //removes item from the room
        console.log(`The enemy takes a sandwich`)
    }

    this.rest();
    
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
    if (this.player && this.player.currentRoom === this.currentRoom) { //checks if player is in the room
      this.attackTarget.applyDamage(this.strength);
      console.log(`You have been hit for ${this.strength} damage!`)
    }
    this.rest()
  }

  act() {

    if (this.health <= 0) {
      // Dead, do nothing;
      return;
    } else if (this.currentRoom.getItemByName('sandwich')) { //checks if there is a sandwich
      this.takeSandwich();
      
    } else if (!this.attackTarget) { //checks if it's targeting player
      
      this.randomAct();

    } else {
      this.attack(this.attackTarget); //attacks the player
    }
  }

  randomAct() {
    let options = 2;
    let choice = Math.floor(Math.random() * options);

    if (choice === 0) {
      this.randomMove();
    } else if (choice === 1) {
      this.scratchNose();
    }

  }

  scratchNose() {

    this.alert(`${this.name} scratches its nose`);
    this.rest();

  }
}

module.exports = {
  Enemy,
};
