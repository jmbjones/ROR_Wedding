var gallery = function() {
  $('.flexslider').flexslider({
    animation: "slide",
    prevText: "",
    nextText: ""
  });

  $('a.engagment').click(function () {
    $('.flexslider').flexslider({
      animation: "slide",
      prevText: "",
      nextText: ""});});
};
