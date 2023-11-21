import Charakter from './Charakter';

export default class Bowman extends Charakter {
  constructor(name, type = 'Bowman') {
    super(name, type);
    this.type = 'Bowman';
    this.attack = 25;
    this.defence = 25;
  }
}
