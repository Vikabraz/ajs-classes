import Charakter from './Charakter';

export default class Magician extends Charakter {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}
