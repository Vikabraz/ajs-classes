class Charakter {
    constructor(name, type) {
        if(name.length <2 || name.length >10){
          throw new Error("фигня какая-то");
        } else{
          this.name = name;
        }    
        // if (!["Bowerman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"].some((el) => el === type)){
        //   throw new Error("фигня какая-то");
        // } else{
        //   this.type = type;
        // }
        this.health = 100;
        this.level = 1;
      }
    
      levelUp(){
        if(this.health > 0){
          this.level += 1;
          this.attack *=1.2;
          this.defence *=1.2;
          this.health = 100;
        } else {
          throw new Error("уже умер");
        }
      }
    }
    
      damage(points) {
        if(this.health >= 0){
          health -= points * (1 - defence / 100);
      }
      }

class Bowman extends Charakter {
  constructor(name, type = "Bowman") {
    super(name, type);
    this.type = "Bowman";
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordsman extends Charakter {
  constructor(name, type = "Swordsman") {
    super(name, type);
    this.type = "Swordsman";
    this.attack = 40;
    this.defence = 10;
  }
}

class Magician extends Charakter {
  constructor(name, type = "Magician") {
    super(name, type);
    this.type = "Magician";
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Charakter {
  constructor(name, type = "Undead") {
    super(name, type);
    this.type = "Undead";
    this.attack = 25;
    this.defence = 25;
  }
}

class Zombie extends Charakter {
  constructor(name, type = "Zombie") {
    super(name, type);
    this.type = "Zombie";
    this.attack = 40;
    this.defence = 10;
  }
}

class Deamon extends Charakter {
  constructor(name, type = "Deamon") {
    super(name, type);
    this.type = "Deamon";
    this.attack = 10;
    this.defence = 40;
  }
}





//@babel/core @babel/cli @babel/preset-env webpack webpack-cli babel-loader jest babel-jest eslint