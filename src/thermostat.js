'use strict'; 


function Thermostat(){
    this.eco = true
    this.temp = 20; 
}

    Thermostat.prototype.raiseTemp = function(){

        return this.temp += 1     
    }
    Thermostat.prototype.dropTemp = function(){

        return this.temp -= 1
    }
    Thermostat.prototype.minTemp = function(){
        return this.temp = 10 
    }
    Thermostat.prototype.pwrSave = function(){
        this.eco = true 
    }
    Thermostat.prototype.ecoOff = function(){
        this.eco = false
    }
    Thermostat.prototype.reset = function(){
        return this.temp = 20; 
    }
    Thermostat.prototype.maxTemp = function(){
        if(this.eco === true){return this.temp = 25}
        else {
            return this.temp = 32 
        }
    }
    Thermostat.prototype.queryUsage = function(){
        if (this.temp <= 18) {
           return 'Low usage'
        } else if (this.temp <= 25){
            return 'Medium usage'
        } else {
            return 'High usage'
        } 
    }