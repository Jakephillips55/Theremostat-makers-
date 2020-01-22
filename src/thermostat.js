'use strict'; 


function Thermostat(){
    this.eco = true;
    this.temp = 20; 
    this.MAX_TEMP = 25
    this.MIN_TEMP = 10
}

Thermostat.prototype.getCurrenttemp = function(){
    return this.temp
}

Thermostat.prototype.raiseTemp = function(){
    if(this.getCurrenttemp >= this.MAX_TEMP){ return "Out of Range"}

    return this.temp += 1     
}
Thermostat.prototype.dropTemp = function(){
    if(this.getCurrenttemp <= this.MIN_TEMP){ return "Out of Range"}
    return this.temp -= 1
}

Thermostat.prototype.pwrSave = function(){
    this.eco = true 
}

Thermostat.prototype.ecoOff = function(){
    this.eco = false
    this.maxTemp()
}
Thermostat.prototype.reset = function(){
    return this.temp = 20; 
}
Thermostat.prototype.maxTemp = function(){
    if(this.eco === false){this.MAX_TEMP = 32}
}

Thermostat.prototype.queryUsage = function(){
    if (this.temp <= 18) {
       return 'Low usage'
    } else if (this.temp <= 25){
        return 'Medium usage'
    } else {
        return 'High usage'
    };
};