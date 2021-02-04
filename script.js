// initializes variables
var list = [];

var myName = document.getElementById('myName');
var phone = document.getElementById('phone');
var bdate = document.getElementById('bdate');
var red = document.getElementById('red');
var orange = document.getElementById('orange');
var yellow = document.getElementById('yellow');
var green = document.getElementById('green');
var blue = document.getElementById('blue');
var purple = document.getElementById('purple');

// creates JSON object
myJSON = {
  'myName': myName,
  'phone': phone,
  'bdate': bdate,
  'red': red.checked,
  'orange': orange.checked,
  'yellow': yellow.checked,
  'green': green.checked,
  'blue': blue.checked,
  'purple': purple.checked,
}

// function after clicking button
function clickButton() {
  // updates global object
  myJSON = {
    'myName': myName.value,
    'phone': phone.value,
    'bdate': bdate.value,
    'red': red.checked,
    'orange': orange.checked,
    'yellow': yellow.checked,
    'green': green.checked,
    'blue': blue.checked,
    'purple': purple.checked,
  }
  // stores user input values, and creates a list of JSON objects
  var lastListStr = localStorage.getItem("jsons");
  list = JSON.parse(lastListStr);
  list.push(myJSON);
  listStr = JSON.stringify(list);
  localStorage.setItem("jsons", listStr);

  // replaces questions with a confirmation
  jsItems.innerHTML = "\n";
  jsItems.innerHTML += "\t\t<h1>Thanks for submitting, " + myJSON["myName"] + "!</h1>\n";
  // new button for showing the current data
  jsItems.innerHTML += "<button onclick='showData()'>Show Your Results</button>";
  // new button for showing the old data
  jsItems.innerHTML += "<button onclick='showOldData()'>Show the Last User's Results</button>";
}
// function for confirming the current user's data
function showData() {

  jsItems.innerHTML += "\t\t<p>Your phone number is " + myJSON["phone"] + ".</p>\n";
  jsItems.innerHTML += "\t\t<p>Your birthday is " + myJSON["bdate"] + ".</p>\n";

  if (myJSON["red"]) {
    jsItems.innerHTML += "\t\t<p>Your favorite color is red.</p>\n";
  } else {
    jsItems.innerHTML += "\t\t<p>You don't like red.</p>\n";
  }
  if (myJSON["orange"]) {
    jsItems.innerHTML += "\t\t<p>Your favorite color is orange.</p>\n";
  } else {
    jsItems.innerHTML += "\t\t<p>You don't like orange.</p>\n";
  }
  if (myJSON["yellow"]) {
    jsItems.innerHTML += "\t\t<p>Your favorite color is yellow.</p>\n";
  } else {
    jsItems.innerHTML += "\t\t<p>You don't like yellow.</p>\n";
  }
  if (myJSON["green"]) {
    jsItems.innerHTML += "\t\t<p>Your favorite color is green.</p>\n";
  } else {
    jsItems.innerHTML += "\t\t<p>You don't like green.</p>\n";
  }
  if (myJSON["blue"]) {
    jsItems.innerHTML += "\t\t<p>Your favorite color is blue.</p>\n";
  } else {
    jsItems.innerHTML += "\t\t<p>You don't like blue.</p>\n";
  }
  if (myJSON["purple"]) {
    jsItems.innerHTML += "\t\t<p>Your favorite color is purple.</p>\n";
  } else {
    jsItems.innerHTML += "\t\t<p>You don't like purple.</p>\n";
  }

}

// function for showcasing the collected data
function showOldData() {
  // stores and returns the data of the last user
  var lastDataStr = localStorage.getItem("data");
  localStorage.setItem("data", JSON.stringify(myJSON));
  lastData = JSON.parse(lastDataStr);

  jsItems.innerHTML += "\t\t<p>The last user was " + lastData["myName"] + ".<p>\n";
  jsItems.innerHTML += "\t\t<p>Their phone number was " + lastData["phone"] + ".</p>\n";
  jsItems.innerHTML += "\t\t<p>Their birthday is " + lastData["bdate"] + ".</p>\n";

  if (lastData["red"]) {
    jsItems.innerHTML += "\t\t<p>Their favorite color is red.</p>\n";
  } else {
    jsItems.innerHTML += "\t\t<p>They don't like red.</p>\n";
  }
  if (lastData["orange"]) {
    jsItems.innerHTML += "\t\t<p>Their favorite color is orange.</p>\n";
  } else {
    jsItems.innerHTML += "\t\t<p>They don't like orange.</p>\n";
  }
  if (lastData["yellow"]) {
    jsItems.innerHTML += "\t\t<p>Their favorite color is yellow.</p>\n";
  } else {
    jsItems.innerHTML += "\t\t<p>They don't like yellow.</p>\n";
  }
  if (lastData["green"]) {
    jsItems.innerHTML += "\t\t<p>Their favorite color is green.</p>\n";
  } else {
    jsItems.innerHTML += "\t\t<p>They don't like green.</p>\n";
  }
  if (lastData["blue"]) {
    jsItems.innerHTML += "\t\t<p>Their favorite color is blue.</p>\n";
  } else {
    jsItems.innerHTML += "\t\t<p>They don't like blue.</p>\n";
  }
  if (lastData["purple"]) {
    jsItems.innerHTML += "\t\t<p>Their favorite color is purple.</p>\n";
  } else {
    jsItems.innerHTML += "\t\t<p>They don't like purple.</p>\n";
  }

}
