/* Is It Your Birthday? Alert Version */

/* Get Today's Date in Comparison Format */
// Get Today's Date as Date Object
var now = new Date();
// remove time
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

/* Get Birthday in Comparison Format */
// Get Birth Month
var m = prompt("Enter birth month(1-12)");
// Get Birth Day
var d = prompt("Enter birth date(1-31)");
// Create Birthdate as Date Object
var birthday = new Date(2021, m-1, d);

/* Perform Comparisons */
// Check if today is birthday, say "Happy Birthday!"
if (birthday.toString() == today.toString()) alert("Happy Birthday!");
// Check if birthday is greater than today, say "none yet"
else if (birthday > today) alert("Not yet!");
// say "already happened"
else alert("Your birthday already happened!")