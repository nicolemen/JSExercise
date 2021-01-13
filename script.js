// function after clicking button
function clickButton() {
  // get values from user input
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var bdate = document.getElementById('bdate').value;
  var red = document.getElementById('red');
  var orange = document.getElementById('orange');
  var yellow = document.getElementById('yellow');
  var green = document.getElementById('green');
  var blue = document.getElementById('blue');
  var purple = document.getElementById('purple');

  myJSON = {
    'name': name,
    'phone': phone,
    'bdate': bdate,
    'red': red.checked,
    'orange': orange.checked,
    'yellow': yellow.checked,
    'green': green.checked,
    'blue': blue.checked,
    'purple': purple.checked,
  }

  // replaces questions with a confirmation
  jsItems.innerHTML = "\n";
  jsItems.innerHTML += "\t\t<h1>Thanks for submitting, " + myJSON["name"] + "!</h1>\n";

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

  // stores and returns the name of the last user
  var lastUser = localStorage.getItem("name");
  jsItems.innerHTML += "\t\t<p>The last user was " + lastUser + ".</p>\n";
  localStorage.setItem("name", myJSON["name"]);

}
