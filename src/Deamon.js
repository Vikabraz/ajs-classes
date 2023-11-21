import Charakter from './Charakter';

export default class Deamon extends Charakter {
  constructor(name, type = 'Deamon') {
    super(name, type);
    this.type = 'Deamon';
    this.attack = 10;
    this.defence = 40;
  }
}
