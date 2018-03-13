export default class Bike {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  pedal() {
    console.log(`I'm riding my ${this.color} bike!`);
  }
}
