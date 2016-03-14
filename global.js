alert("Okay, about to make the request behind the scenes.");

var request = new XMLHttpRequest();
request.open("GET", "http://localhost:8080/info");

request.addEventListener("load", function(event){
  var the_request = event.target
  alert(the_request.responseText);
});

request.send();