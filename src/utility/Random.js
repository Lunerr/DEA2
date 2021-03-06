class Random {
  static nextInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  static nextFloat(min, max) {
    return this.nextInt(min * 100, (max * 100) + 1) / 100;
  }

  static roll() {
    return this.nextFloat(0, 100);
  }

  static arrayElement(array) {
    return array[this.nextInt(0, array.length)];
  }

  static arrayTest(array) {
    return array[(0)];
  }

  static objectProp(object) {
    return Object.keys(object)[Math.floor(Math.random()*Object.keys(object).length)];
  }
}

module.exports = Random;
