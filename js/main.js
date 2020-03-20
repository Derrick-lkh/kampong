$(document).ready(function() {
  $(".menu-btn").on("click", function() {
    console.log("click");
    $(".navigation-links").slideToggle();
  });
});
