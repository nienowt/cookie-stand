var pikePlace = {
  minCust: 17,
  maxCust: 88,
  avgPurch: 5.2,
  hourTotal: [],
  dailyTotal: 0,


  generateRandom: function(min, max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  calcHourly: function() {
    for (var i=0; i<8; i++) {
    var hourly = this.generateRandom() * this.avgPurch;
      this.hourTotal.push(hourly);
    }
    console.log(this.hourTotal);
  },

  calcDaily: function(){
    for (var i=0; i<8; i++) {
      this.dailyTotal += this.hourTotal[i];
    }
    console.log(this.dailyTotal);
  }
};

// function displayTotals() {
//   for (var i=0; i<pikePlace.hourTotal.length;i++) {
//     var time = document.createElement('ul');
//     var timetotal = document.createElement('li');
//   }

// }




