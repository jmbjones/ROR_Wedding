var party = function() {

  $('.image-cover').hover(function() {
    $(this).addClass("corner-full");
  }, function() {
    $(this).removeClass("corner-full")
  });
};
