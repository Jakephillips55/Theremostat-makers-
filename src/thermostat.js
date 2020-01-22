'use strict'; 


function Thermostat(){
    this.temp = 20; 
}
    Thermostat.prototype.raiseTemp = function(){

        return this.temp += 1     
}
    Thermostat.prototype.dropTemp = function(){

        return this.temp -= 1
    }