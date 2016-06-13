$(document).ready ->
  #navigation menu scroll on click
  $('ul.nav li > a').click ->
    $('html, body').animate { scrollTop: $('#' + this.className).offset().top }, 1000, 'easeInOutCirc'
    false

  #
