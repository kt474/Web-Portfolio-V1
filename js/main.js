//background vector animation
//arrow/scroll animations
$(function() {
  setTimeout(function() {
    $("#arrow").removeClass("hidden");
  }, 3000);
  $(window).scroll(function() {
    if ($(this).scrollTop() > 80) {
      $("body").addClass("changeColor");
      $("#side").removeClass("sidebar");
      $("#arrow")
        .delay(700)
        .fadeOut(100);
      if ($(this).scrollTop() > 1350) {
        $("body").addClass("changeColor2");
      }
    }
    if ($(this).scrollTop() < 1250) {
      $("body").removeClass("changeColor2");

      if ($(this).scrollTop() < 600) {
        $("body").removeClass("changeColor");
        //$("#side").addClass("Hidden");
      }
    }
  });
});

//about me text animation
// Wrap every letter in a span

//pop up box
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
// main.onclick = function() {
//   modal.style.display = "none";
// };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
