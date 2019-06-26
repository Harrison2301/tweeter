$(document).ready(() => {
  $(".new-tweet form textarea").on("input", () => {
    var content = $.trim($("textarea").val());
    $(".new-tweet form .counter").text(140-content.length);
    if(content.length > 140) {
      $(".new-tweet form .counter").css('color', 'red');
    } else {
      $(".new-tweet form .counter").css('color', 'black');
    }
  });
});