function myFunction() {
  var input, filter, fields;
  input = document.getElementById("myInput").value.toUpperCase();
  filter = document.getElementsByClassName("title");
  for (var i = 0; i < filter.length; i++) {
    fields = filter[i].getElementsByTagName("h3");
  }
}
