'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

var firstPike = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  cookiesPerHour: [],
  custPerHour: function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  },
  cookiesPurchased: function() {
    return this.custPerHour() * this.avgCookieSale}
}

for(var i = 0; i < hours.length; i++) {
  firstPike.cookiesPerHour.push(firstPike.cookiesPurchased());
}

function makeHTML() {
  var container = document.createElement('div');
  container.innerHTML = '<h2>' + firstPike.location + '</h2>';
  document.body.appendChild(container);

  var list = document.createElement('ul');
  var listArr = []

  for (var i = 0; i < firstPike.cookiesPerHour.length; i++) {
    listArr.push('<li>'+ hours[i] + ' cookies: ' + firstPike.cookiesPerHour[i] + '</li>');
  }

  var fullList = listArr.join('');
  list.innerHTML = fullList;
  document.body.appendChild(list);
}

makeHTML()

var seatacAirport = {
  location: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  custPerHour: function(minCust, maxCust) {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  }
}

var seattleCenter = {
  location: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  custPerHour: function(minCust, maxCust) {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  }
}

var capitolHill = {
  location: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  custPerHour: function(minCust, maxCust) {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  }
}

var alki = {
  location: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  custPerHour: function(minCust, maxCust) {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  }
}
