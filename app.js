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
  }

  this.calcHourly = function() {
    for (var i = 0; i<hour.length-2; i++) {  //-2 accounts for extra values in hour array, empty cell and total
    var hourly = Math.floor(this.generateRandom() * this.avgPurch);
      if (this.hourTotal.length < hour.length-2) {
      this.hourTotal.push(hourly);
      this.dailyTotal += this.hourTotal[i];
      }
    }
  }
};

var pike = new CookieStand('Pike Place', 17,88,5.2);
var seaTac = new CookieStand('SeaTac', 6,44,1.2);
var southCenter = new CookieStand('South Center', 11,38,1.9);
var bellSquare = new CookieStand('Bellevue Square', 20,48,3.3);
var alki = new CookieStand('Alki', 3,24,2.6);
//-----table-------
function displayTable() {
  var tbl = document.createElement('table');  //move these variables outside into function outside of displayTable
  tbl.id='tbl';
  var headerRow = document.createElement('tr');

  for (i = 0; i < hour.length; i++) {              //break up into different functions
    var thElement = document.createElement('th');
    thElement.textContent = hour[i];
    headerRow.appendChild(thElement);
  }
    tbl.appendChild(headerRow);

  for (i = 0; i < allCookieStands.length; i++) {
    allCookieStands[i].calcHourly();
    var trElement = document.createElement("tr");
    var tdElement = document.createElement("td");
    tdElement.textContent = allCookieStands[i].loc;
    trElement.appendChild(tdElement);
    tbl.appendChild(trElement);
    for  (j = 0; j < hour.length-2; j++) {
      var tdElement2 = document.createElement('td');           //move into object to add line rather than refresh table
      tdElement2.textContent = allCookieStands[i].hourTotal[j];
      trElement.appendChild(tdElement2);
    }
    var resultsTd = document.createElement('td');
    resultsTd.textContent = allCookieStands[i].dailyTotal;
    trElement.appendChild(resultsTd);
  }
  document.getElementById("table").appendChild(tbl);
};

displayTable();
//--------form----------
var subForm = document.getElementById('submission-form');
var refresh = function() {
  var oldTable = document.getElementById('tbl');
  var container = oldTable.parentNode;
  container.removeChild(oldTable);
  displayTable();
};

 var handleSub = function(event) {
  event.preventDefault();

    if ((!event.target.storeLoc.value) || (!event.target.min.value) || (!event.target.max.value) || (!event.target.avgCookie.value)) {
      return alert('Fill those fields fool!');
    }
    var place = event.target.storeLoc.value;
    var minimum = event.target.min.value;
    var maximum = event.target.max.value;
    var cookies = event.target.avgCookie.value;
    var addLocation = new CookieStand(place, minimum, maximum, cookies);

    event.target.storeLoc.value = null;
    event.target.min.value = null;
    event.target.max.value = null;
    event.target.avgCookie.value = null;

    refresh();
};

subForm.addEventListener('submit', handleSub);


