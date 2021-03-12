$(document).ready(function () {
  dropDown();
});

function dropDown() {
  var over = $(".over-drop > a");

  over.mouseenter(function() {
    $("over-drop > div").addClass("active");
  });
}
