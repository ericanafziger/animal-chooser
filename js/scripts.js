$(document).ready(function(){
  var muppetInput = prompt("Would you like to learn about Kermit, Fozzy or Animal?");

  if (muppetInput === "Kermit") {
    $("#kermit").show();
  }  else if (muppetInput === "Fozzy") {
    $("#fozzy").show();
  } else if (muppetInput === "Animal") {
    $("#animal").show();
  } else {
    location.reload();
  }
});
