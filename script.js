// function after clicking button
function clickButton(){
  // get values from user input
  var name = document.getElementById('name').value;
  // the following two don't actually work because they can't access the specific user inputs
  var color = document.getElementById('color').value;
  var age = document.getElementById('age').value;
  jsItems.innerHTML = "\n";
  jsItems.innerHTML += "\t\t<h1>Thanks for submitting, " + name + "!</h1>\n";
  jsItems.innerHTML += "\t\t<p>You are " + age + ", and your favorite color(s) is/are " + color + ".</p>\n";
}
