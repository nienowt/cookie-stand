var pikePlace = {
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

  displayTotals: function() {
  for (var i=0; i<8;i++) {
    var results = document.createElement('ul');
    var timeTotal = document.createElement('li');

    timeTotal.innerHTML = this.hour[i] + this.hourTotal[i];
    document.body.appendChild(timeTotal);
    }

  var finalTotal = document.createElement('li')
  finalTotal.innerHTML = "Total: " + this.dailyTotal;
  document.body.appendChild(finalTotal);

  }
};

pikePlace.calcHourly();
pikePlace.calcDaily();
pikePlace.displayTotals();








