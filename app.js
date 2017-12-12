'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // via MDN docs
}

var store1 = {
  name: '1st and Pike',
  ulId: 'pike',
  minCustsPerHour: 23,
  maxCustsPerHour: 65,
  avgCookiesPerCust: 6.3,
  custsEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total');
    }
  },
  render: function(){
    this.calcCookiesEachHour();
    // access the element in the DOM where the stuff will go
    var ulElement = document.getElementById(this.ulId);
    // console.log(ulElement, 'ul Element');
    for(var i = 0; i < hours.length; i++){
      // create an element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent =
      hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      // append it to the parent
      ulElement.appendChild(liElement);
    }
    // get the element
    liElement = document.createElement('li');
    // give it content
    liElement.textContent =
    'Total: ' + this.totalDailySales + ' cookies';
    // append it to the parent
    ulElement.appendChild(liElement);
  }
}

var store2 = {
  name: 'Seatac Airport',
  ulId: 'seatac',
  minCustsPerHour: 3,
  maxCustsPerHour: 24,
  avgCookiesPerCust: 1.2,
  custsEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total');
    }
  },
  render: function(){
    this.calcCookiesEachHour();
    // access the element in the DOM where the stuff will go
    var ulElement = document.getElementById(this.ulId);
    // console.log(ulElement, 'ul Element');
    for(var i = 0; i < hours.length; i++){
      // create an element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent =
      hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      // append it to the parent
      ulElement.appendChild(liElement);
    }
    // get the element
    liElement = document.createElement('li');
    // give it content
    liElement.textContent =
    'Total: ' + this.totalDailySales + ' cookies';
    // append it to the parent
    ulElement.appendChild(liElement);
  }
}

var store3 = {
  name: 'Seattle Center',
  ulId: 'sc',
  minCustsPerHour: 11,
  maxCustsPerHour: 38,
  avgCookiesPerCust: 3.7,
  custsEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total');
    }
  },
  render: function(){
    this.calcCookiesEachHour();
    // access the element in the DOM where the stuff will go
    var ulElement = document.getElementById(this.ulId);
    // console.log(ulElement, 'ul Element');
    for(var i = 0; i < hours.length; i++){
      // create an element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent =
      hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      // append it to the parent
      ulElement.appendChild(liElement);
    }
    // get the element
    liElement = document.createElement('li');
    // give it content
    liElement.textContent =
    'Total: ' + this.totalDailySales + ' cookies';
    // append it to the parent
    ulElement.appendChild(liElement);
  }
}

var store4 = {
  name: 'Capitol Hill',
  ulId: 'cap-hill',
  minCustsPerHour: 20,
  maxCustsPerHour: 38,
  avgCookiesPerCust: 2.3,
  custsEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total');
    }
  },
  render: function(){
    this.calcCookiesEachHour();
    // access the element in the DOM where the stuff will go
    var ulElement = document.getElementById(this.ulId);
    // console.log(ulElement, 'ul Element');
    for(var i = 0; i < hours.length; i++){
      // create an element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent =
      hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      // append it to the parent
      ulElement.appendChild(liElement);
    }
    // get the element
    liElement = document.createElement('li');
    // give it content
    liElement.textContent =
    'Total: ' + this.totalDailySales + ' cookies';
    // append it to the parent
    ulElement.appendChild(liElement);
  }
}

var store5 = {
  name: 'Alki Beach',
  ulId: 'alki',
  minCustsPerHour: 2,
  maxCustsPerHour: 16,
  avgCookiesPerCust: 4.6,
  custsEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total');
    }
  },
  render: function(){
    this.calcCookiesEachHour();
    // access the element in the DOM where the stuff will go
    var ulElement = document.getElementById(this.ulId);
    // console.log(ulElement, 'ul Element');
    for(var i = 0; i < hours.length; i++){
      // create an element
      var liElement = document.createElement('li');
      // give it content
      liElement.textContent =
      hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      // append it to the parent
      ulElement.appendChild(liElement);
    }
    // get the element
    liElement = document.createElement('li');
    // give it content
    liElement.textContent =
    'Total: ' + this.totalDailySales + ' cookies';
    // append it to the parent
    ulElement.appendChild(liElement);
  }
}

store1.render()
store2.render()
store3.render()
store4.render()
store5.render()
