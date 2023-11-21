import Charakter from './Charakter';

export default class Zombie extends Charakter {
  constructor(name, type = 'Zombie') {
    super(name, type);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}
