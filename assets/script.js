function aCCa(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace("w3-2025-lyons-blue", "w3-crimson");
  } else { 
    x.className = x.className.replace("w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace("w3-crimson", "w3-2025-lyons-blue");
  }
}

function openTabby(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("taba");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-crimson", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " w3-crimson";
}

$(document).ready(function(){
  $("#hide1").click(function(){
    $("#hshow").toggle();
  });
});

