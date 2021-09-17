export default class Monster {
  constructor(name, matrix) {
    this.name = name;
    this.matrix = matrix;
  }

  getStrength() {
    let strength = 0;
    this.matrix.forEach(value => {
      if (value) {
        strength++;
      }
    });
    return strength;
  }
}