var pikePlace = {
  locName: "pikePlace",
  minCust: 17,
  maxCust: 88,
  avgPurch: 5.2,
  hourTotal: [],
  dailyTotal: 0,
  hour: ["10:00am: ","11:00am: ","12:00pm: ","1:00pm: ","2:00pm: ","3:00pm: ","4:00pm: ","5:00pm: "],

  generateRandom: function(min, max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  calcHourly: function() {
    for (var i=0; i<8; i++) {
    var hourly = Math.floor(this.generateRandom() * this.avgPurch);
      this.hourTotal.push(hourly);
    }
  },

  calcDaily: function(){
    for (var i=0; i<8; i++) {
      this.dailyTotal += this.hourTotal[i];
    }
  },

  showTotals: function (){
    for (var i=0; i<8;i++) {
      var position = document.getElementById(this.locName);
      var timeTotal = document.createElement('li');

      timeTotal.innerHTML = this.hour[i] + this.hourTotal[i];
      position.appendChild(timeTotal);
    }
  finalTotal = document.createElement('li');
  finalTotal.innerHTML = "Total: " + this.dailyTotal;
  position.appendChild(finalTotal);
  }
};

//new object

var seaTac = {
  locName: "seaTac",
  minCust: 6,
  maxCust: 44,
  avgPurch: 1.2,
  hourTotal: [],
  dailyTotal: 0,
  hour: ["10:00am: ","11:00am: ","12:00pm: ","1:00pm: ","2:00pm: ","3:00pm: ","4:00pm: ","5:00pm: "],

  generateRandom: function(min, max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  calcHourly: function() {
    for (var i=0; i<8; i++) {
    var hourly = Math.floor(this.generateRandom() * this.avgPurch);
      this.hourTotal.push(hourly);
    }
  },

  calcDaily: function(){
    for (var i=0; i<8; i++) {
      this.dailyTotal += this.hourTotal[i];
    }
  },


  showTotals: function (){
    for (var i=0; i<8;i++) {
      var position = document.getElementById(this.locName);
      var timeTotal = document.createElement('li');

      timeTotal.innerHTML = this.hour[i] + this.hourTotal[i];
      position.appendChild(timeTotal);
    }
  finalTotal = document.createElement('li');
  finalTotal.innerHTML = "Total: " + this.dailyTotal;
  position.appendChild(finalTotal);
  }
};

var southCenter = {
  locName: "southCenter",
  minCust: 11,
  maxCust: 38,
  avgPurch: 1.9,
  hourTotal: [],
  dailyTotal: 0,
  hour: ["10:00am: ","11:00am: ","12:00pm: ","1:00pm: ","2:00pm: ","3:00pm: ","4:00pm: ","5:00pm: "],

  generateRandom: function(min, max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  calcHourly: function() {
    for (var i=0; i<8; i++) {
    var hourly = Math.floor(this.generateRandom() * this.avgPurch);
      this.hourTotal.push(hourly);
    }
  },

  calcDaily: function(){
    for (var i=0; i<8; i++) {
      this.dailyTotal += this.hourTotal[i];
    }
  },

  showTotals: function (){
    for (var i=0; i<8;i++) {
      var position = document.getElementById(this.locName);
      var timeTotal = document.createElement('li');

      timeTotal.innerHTML = this.hour[i] + this.hourTotal[i];
      position.appendChild(timeTotal);
    }
  finalTotal = document.createElement('li');
  finalTotal.innerHTML = "Total: " + this.dailyTotal;
  position.appendChild(finalTotal);
  }
};

var bellSquare = {
  locName: "bellSquare",
  minCust: 20,
  maxCust: 48,
  avgPurch: 3.3,
  hourTotal: [],
  dailyTotal: 0,
  hour: ["10:00am: ","11:00am: ","12:00pm: ","1:00pm: ","2:00pm: ","3:00pm: ","4:00pm: ","5:00pm: "],

  generateRandom: function(min, max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  calcHourly: function() {
    for (var i=0; i<8; i++) {
    var hourly = Math.floor(this.generateRandom() * this.avgPurch);
      this.hourTotal.push(hourly);
    }
  },

  calcDaily: function(){
    for (var i=0; i<8; i++) {
      this.dailyTotal += this.hourTotal[i];
    }
  },

  showTotals: function (){
    for (var i=0; i<8;i++) {
      var position = document.getElementById(this.locName);
      var timeTotal = document.createElement('li');

      timeTotal.innerHTML = this.hour[i] + this.hourTotal[i];
      position.appendChild(timeTotal);
    }
  finalTotal = document.createElement('li');
  finalTotal.innerHTML = "Total: " + this.dailyTotal;
  position.appendChild(finalTotal);
  }
};

var alki = {
  locName: "alki",
  minCust: 3,
  maxCust: 24,
  avgPurch: 2.6,
  hourTotal: [],
  dailyTotal: 0,
  hour: ["10:00am: ","11:00am: ","12:00pm: ","1:00pm: ","2:00pm: ","3:00pm: ","4:00pm: ","5:00pm: "],

  generateRandom: function(min, max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  calcHourly: function() {
    for (var i=0; i<8; i++) {
    var hourly = Math.floor(this.generateRandom() * this.avgPurch);
      this.hourTotal.push(hourly);
    }
  },

  calcDaily: function(){
    for (var i=0; i<8; i++) {
      this.dailyTotal += this.hourTotal[i];
    }
  },

  showTotals: function (){
    for (var i=0; i<8;i++) {
      var position = document.getElementById(this.locName);
      var timeTotal = document.createElement('li');

      timeTotal.innerHTML = this.hour[i] + this.hourTotal[i];
      position.appendChild(timeTotal);
    }
  finalTotal = document.createElement('li');
  finalTotal.innerHTML = "Total: " + this.dailyTotal;
  position.appendChild(finalTotal);
  }
};

pikePlace.calcHourly();
pikePlace.calcDaily();
pikePlace.showTotals();

seaTac.calcHourly();
seaTac.calcDaily();
seaTac.showTotals();

southCenter.calcHourly();
southCenter.calcDaily();
southCenter.showTotals();


bellSquare.calcHourly();
bellSquare.calcDaily();
bellSquare.showTotals();

alki.calcHourly();
alki.calcDaily();
alki.showTotals();
