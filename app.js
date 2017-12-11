'use strict';

var firstPike = {
  location: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  custPerHour: function(minCust, maxCust) {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  }
}

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
