var hour = [" ","10:00am ","11:00am ","12:00pm ","1:00pm ","2:00pm ","3:00pm ","4:00pm ","5:00pm ", "Total"];
var allCookieStands = [];

function CookieStand(loc, minCust, maxCust, avgPurch) {
  this.loc = loc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPurch = avgPurch;
  this.hourTotal = [];
  this.dailyTotal = 0;
  allCookieStands.push(this);

  this.generateRandom = function(min, max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };

  this.calcHourly = function() {
    for (var i=0; i<hour.length-2; i++) {
    var hourly = Math.floor(this.generateRandom() * this.avgPurch);
      this.hourTotal.push(hourly);
      this.dailyTotal += this.hourTotal[i];
    }
  };
}

var pike = new CookieStand('Pike Place', 17,88,5.2);
var seaTac = new CookieStand('SeaTac', 6,44,1.2);
var southCenter = new CookieStand('South Center', 11,38,1.9);
var bellSquare = new CookieStand('Bellevue Square', 20,48,3.3);
var alki = new CookieStand('Alki', 3,24,2.6);

function displayTable() {
  var tbl = document.createElement('table');
  var headerRow = document.createElement('tr');
  // var emptyTh = document.createElement('th');
  // headerRow.appendChild(emptyTh);

    for (i = 0; i < hour.length; i++) {
      var thElement = document.createElement('th');
      thElement.textContent = hour[i];
      headerRow.appendChild(thElement);
    }
  // var results = document.createElement('th');
  // results.textContent = "Total";
  // headerRow.appendChild(results);
  tbl.appendChild(headerRow);

  for (i = 0; i < allCookieStands.length; i++) {
    allCookieStands[i].calcHourly();
    var trElement = document.createElement("tr");
    var tdElement = document.createElement("td");
    tdElement.textContent = allCookieStands[i].loc;
    trElement.appendChild(tdElement);
    tbl.appendChild(trElement);

      for  (j = 0; j < hour.length-2; j++) {
      var tdElement2 = document.createElement('td');
      tdElement2.textContent = allCookieStands[i].hourTotal[j];
      trElement.appendChild(tdElement2);
    }

  var resultsTd = document.createElement('td');
  resultsTd.textContent = allCookieStands[i].dailyTotal;
  trElement.appendChild(resultsTd);
  }
document.getElementById("table").appendChild(tbl);
}

displayTable();
