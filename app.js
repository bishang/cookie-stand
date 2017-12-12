'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStores =[];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN docs
}

function Store(name, minCustsPerHour, maxCustsPerHour, avgCookiesPerCust) {
  this.name = name;
  this.minCustsPerHour = minCustsPerHour;
  this.maxCustsPerHour = maxCustsPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custsEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailySales = 0;
  this.calcCustsEachHour = function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  };
  this.calcCookiesEachHour = function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total');
    }
  };
  this.calcCookiesEachHour();
  allStores.push(this);
  this.render = function(){

  };
}

// Store Instances
new Store('1st and Pike', 23, 65, 6.3)
new Store('Seatac Airport', 3, 24, 1.2)
new Store('Seattle Center', 11, 38, 3.7)
new Store('Capitol Hill', 20, 38, 2.3)
new Store('Alki Beach', 2, 16, 4.6)
