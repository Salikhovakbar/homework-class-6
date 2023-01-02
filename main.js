class car{
    constructor(car, marka, color, number,year, petrol,motor, light){
this.car = car
this.model = marka
this.color = color
this.number = number
this.year = year
this.petrol = petrol
this.motor = motor
this.light = light
}
texpassport(){
return this.#carDetails()
}
#carDetails(){
    return `model : ${this.model} color : ${this.color} numberOfCar : ${this.number}, year : ${this.year}`
}
switchOff(){
    return this.#off()
}
#off(){
 this.motor  = false
 this.light = false
 return `motor : ${this.motor},  petrol : ${this.petrol},  light : ${this.light}`
}
switchOn(){
return  this.#on()
}
#on(){
 this.motor = true
 this.light = true
 return `motor : ${this.motor},  petrol :  ${this.petrol}, light : ${this.light}`
}
drive(){
    return this.#go()
}
#go(){
    this.petrol -= 30
    return `petrol : ${this.petrol}`
}
getPetrol(){
return this.#plusPetrol()
}
#plusPetrol(){
    this.petrol += 30
    return `petrol : ${this.petrol}`
}
fix(){
return this.#permission()
}
#permission(){
    this.permission = true
    return `state : ${this.permission}`
}
}
let carInfo = new car('Merc', 'merc', 'black', 'z777zz', 2023, 100, null, null)
console.log(carInfo.drive());
console.log(carInfo.getPetrol());
console.log(carInfo.texpassport());