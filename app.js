var hour = ["10:00am ","11:00am ","12:00pm ","1:00pm ","2:00pm ","3:00pm ","4:00pm ","5:00pm "];



function CookieStand(domID, minCust, maxCust, avgPurch) {
  this.domID = domID;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPurch = avgPurch;
  this.hourTotal = [];
  this.dailyTotal = 0;

  this.generateRandom = function(min, max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };

  this.calcHourly = function() {
    for (var i=0; i<8; i++) {
    var hourly = Math.floor(this.generateRandom() * this.avgPurch);
      this.hourTotal.push(hourly);
      this.dailyTotal += this.hourTotal[i];
    }
  };

  // this.showTotals = function (){
  //   for (var i=0; i<8;i++) {
  //     var position = document.getElementById(this.domID);
  //     var timeTotal = document.createElement('li');
  //     timeTotal.innerHTML = hour[i] + this.hourTotal[i];
  //     position.appendChild(timeTotal);
  //   }
  // finalTotal = document.createElement('li');
  // finalTotal.innerHTML = "Total: " + this.dailyTotal;
  // position.appendChild(finalTotal);
  // };
  // this.displayTotals = function() {
  //   this.calcHourly();
  //   this.showTotals();
  // };
}


var pike = new CookieStand('pikePlace', 17,88,5.2);
var seaTac = new CookieStand('seaTac', 6,44,1.2);
var southCenter = new CookieStand('southCenter', 11,38,1.9);
var bellSquare = new CookieStand('bellSquare', 20,48,3.3);
var alki = new CookieStand('alki', 3,24,2.6);
var allCookieStands = [pike, seaTac, southCenter, bellSquare, alki];


function displayTable() {
  var tbl = document.createElement('table');
  var headerRow = document.createElement('tr');
  var emptyth = document.createElement('th');
  headerRow.appendChild(emptyth);
    for (i = 0; i < hour.length; i++) {
  var thElement = document.createElement('th');
  thElement.textContent = hour[i]; 
  headerRow.appendChild(thElement);
  }
  var results = document.createElement('th');
  results.textContent = "Total";
  tbl.appendChild(headerRow);

  for (i = 0; i < allCookieStands.length; i++) {
    allCookieStands[i].calcHourly();
    var trElement = document.createElement("tr");
    var tdElement = document.createElement("td");
    tdElement.textContent = allCookieStands[i].domID;
    trElement.appendChild(tdElement);
    tbl.appendChild(trElement);

    for  (j = 0; j < hour.length; j++) {
      var tdElement2 = document.createElement('td');
      tdElement2.textContent = allCookieStands[i].hourTotal[j];
      trElement.appendChild(tdElement2);
    }
    var resultstd = document.createElement('td');
    resultstd.textContent = allCookieStands[i].dailyTotal;
    trElement.appendChild(resultstd);
  }
document.getElementById("table").appendChild(tbl);
}


  var trElement = document.createElement('tr');

  // for (i = 0; i < hourly.length; i++) {
  //   var tdElement = document.createElement('td');
  //   tdElement.textContent = hour[i];
  //   trElement.appendChild(tdElement);
  //   tbl.appendChild(trElement);
  // };
  // for (i = 0; i < hour.length; i++) {
  //     var tdElement = document.createElement('td');
  //     tdElement.textContent = this.hourTotal[i];
  //     trElement.appendChild(tdElement);
  //     tbl.appendChild(trElement);
  // };
  
  // document.body.appendChild(tbl);


displayTable();