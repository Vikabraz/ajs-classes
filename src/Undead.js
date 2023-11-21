import Charakter from './Charakter';

export default class Undead extends Charakter {
  constructor(name, type = 'Undead') {
    super(name, type);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}
