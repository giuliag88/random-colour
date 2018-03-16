$(document).ready(function () {

  function randomBGcolour () {
    return "#" + Math.random().toString(16).slice(2, 8);
  }

  $("#button").on("click", function () {
    $("body").css("background", randomBGcolour());
  });

});
