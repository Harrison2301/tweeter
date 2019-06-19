$(document).ready(() => {
    $('textarea').on('input', () => {
      const counter = $('span.counter');
      if (counter.text() < 0) {
        counter.css('color', 'red');
      } else {
        counter.css('color', 'back');
      }
      counter.text(140 - $('textarea').val().length);
    });
  });
