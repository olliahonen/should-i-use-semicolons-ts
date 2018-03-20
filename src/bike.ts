export default class Bike {
  private color: string;

  constructor(color: string) {
    this.color = color;
  }

  public pedal() {
    console.log(`I'm riding my ${this.color} bike...`);
  }

  public shout() {
    return adjective => console.log(`My ${this.color} bike is so ${adjective || this.color}!`)
  }
}
