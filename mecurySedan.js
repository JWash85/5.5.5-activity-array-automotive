//this includes the vehicle class as a module
const VehicleModule = require("./vehicle");
const { Vehicle } = require("./vehicleBaseClass");

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor (maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService) {
       super(make, model, year, color, mileage);
       this.maximumPassengers = maximumPassengers;
       this.passenger = passenger;
       this.numberOfWheels = numberOfWheels;
       this.maximumSpeed = maximumSpeed;
       this.fuel = fuel;
       this.scheduleService = scheduleService;
        
    }
    loadPassenger(num) {
        if(this.passenger < this.maximumPassengers){
            availableRoom == true
        }
    }
    start() {
        if(this.fuel > 0){
            start == true
        }
    }
    scheduleService(mileage) {
        if(this.mileage > 30000){
            return 'Time for maintenance'
        }
    }

}