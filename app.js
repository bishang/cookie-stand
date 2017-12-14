'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var hourTotals = [];
var allStores =[];

var form = document.getElementById('store_form');
var storeTable = document.getElementById('store_table');
var trEl = document.createElement('tr');
var thEl = document.createElement('th');
var tdEl = document.createElement('td');

function Store(name, minCustsPerHour, maxCustsPerHour, avgCookiesPerCust) {
  this.name = name;
  this.minCustsPerHour = minCustsPerHour;
  this.maxCustsPerHour = maxCustsPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custsEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailySales = 0;
  allStores.push(this);
};

new Store('1st and Pike', 23, 65, 6.3);
new Store('Seatac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki Beach', 2, 16, 4.6);

console.log(allStores);

Store.prototype.calcCustsEachHour = function(){
  for(var i = 0; i < hours.length; i++){
    this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
  };
};

Store.prototype.calcCookiesEachHour = function(){
  this.calcCustsEachHour();
  for(var i = 0; i < hours.length; i++){
    var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
    this.cookiesEachHour.push(oneHour);
    this.totalDailySales += oneHour;
  };
};

Store.prototype.render = function(){
  this.calcCookiesEachHour();
  trEl = document.createElement('tr'); // starts table row

  tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  for(var i = 0; i < hours.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
  };

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailySales;
  trEl.appendChild(tdEl);

  storeTable.appendChild(trEl); // ends table row
};

function formData(event) {
  event.preventDefault();

  var name = event.target.name.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;

  data.push(new Store(name, min, max, avg));
  renderStoreRows();
  form.reset();
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN docs
}

function calcHourlyTotals() {
  for(var i = 0; i < hours.length; i++){
    var totalHourlySales = 0;
    // for(var j = 0; j < allStores.length; j++){
    //   totalHourlySales += allStores[j].cookiesEachHour[j];
    // };
    hourTotals.push(totalHourlySales);
  };
};


function renderHeaderRow() {
  trEl = document.createElement('tr');

  thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  };

  thEl = document.createElement('th'); // create th element
  thEl.textContent = 'Daily Location Total'; // give th content
  trEl.appendChild(thEl); // append th to tr

  storeTable.appendChild(trEl); // append tr to table
};

function renderStoreRows(){
  for(var i = 0; i < allStores.length; i++){
    allStores[i].render();
  };
};

function renderFooterRow(){
  trEl = document.createElement('tr');

  thEl = document.createElement('th');
  thEl.textContent = 'Total Hourly Sales';
  trEl.appendChild(thEl);

  for(var i = 0; i < hours.length; i++){

    thEl = document.createElement('th');
    thEl.textContent = hourTotals[i];
    trEl.appendChild(thEl);
  }

  storeTable.appendChild(trEl);
};

form.addEventListener('submit', formData);
renderHeaderRow();
renderStoreRows();
calcHourlyTotals();
renderFooterRow();
