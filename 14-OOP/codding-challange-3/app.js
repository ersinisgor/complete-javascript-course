const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};

Car.prototype.brake = function (brake, speed) {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.changeBattery = function (changeTo) {
  this.charge = changeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going to ${this.speed} km/h, with a charge of  ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.changeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();
