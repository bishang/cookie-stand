'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStores =[];
var storeTable = document.getElementById('stores');

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
    // create tr
    var trEl = document.createElement('tr');
    // create td
    var tdEl = document.createElement('td');
    // give td content
    tdEl.textContent = this.name;
    // append the td
    trEl.appendChild(tdEl);
    for(var i = 0; i < hours.length; i++){
      // create td
      var tdEl = document.createElement('td');
      // give td content
      tdEl.textContent = this.cookiesEachHour[i];
      // append the td
      trEl.appendChild(tdEl);
    };
    // append the tr to the table
    storeTable.appendChild(trEl);
  };
}

// Store Instances
new Store('1st and Pike', 23, 65, 6.3)
new Store('Seatac Airport', 3, 24, 1.2)
new Store('Seattle Center', 11, 38, 3.7)
new Store('Capitol Hill', 20, 38, 2.3)
new Store('Alki Beach', 2, 16, 4.6)

function makeHeaderRow() {
  // create tr
  var trEl = document.createElement('tr');
  // create th
  var thEl = document.createElement('th');
  // give th content (Name for an individual cat)
  thEl.textContent = '';
  // append the th
  trEl.appendChild(thEl);
  for(var i = 0; i < hours.length; i++){
    // create th
    thEl = document.createElement('th');
    // give th content (Color for an individual cat)
    thEl.textContent = hours[i];
    // append the th
    trEl.appendChild(thEl);
  }
  // append the tr to the table
  storeTable.appendChild(trEl);
}

function renderStoreRows(){
  for(var i = 0; i < allStores.length; i++){
    allStores[i].render();
  }
}

makeHeaderRow()
renderStoreRows()
