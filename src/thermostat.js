'use strict'; 

function Thermostat(){
    this.eco = true;
    this.temp = 20; 
    this.MIN_TEMP = 10
    this.maxTemp = function() {
        return (this.eco ? 25 : 32)
    }
}

Thermostat.prototype.getCurrentTemp = function(){
    return this.temp
}

Thermostat.prototype.raiseTemp = function(){
    if(this.temp < this.maxTemp() ){
        return this.temp += 1 
    }
    else{
        return this.temp
    }
}
Thermostat.prototype.dropTemp = function(){
    this.queryRange();
    if(this.temp > this.MIN_TEMP)
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
Thermostat.prototype.queryRange = function(){
    if(this.getCurrenttemp >= this.MAX_TEMP || this.getCurrenttemp <= this.MIN_TEMP){ return "Out of Range"}

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
