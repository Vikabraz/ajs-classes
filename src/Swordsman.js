import Charakter from './Charakter';

export default class Swordsman extends Charakter {
  constructor(name, type = 'Swordsman') {
    super(name, type);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}
