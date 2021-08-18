function myFunction() {
  var x = document.getElementById("header-nav-bar");
  if (x.className === "top-bar-items") {
    x.className += " responsive";
  } else {
    x.className = "top-bar-items";
  }
}