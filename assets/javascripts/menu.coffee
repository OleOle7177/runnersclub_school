$(document).ready ->
  # Add scrollspy to <body>
  $('body').scrollspy
    target: '#scroll'
    offset: 100

  $('#scroll').on 'activate.bs.scrollspy', (event) ->
    sectionName = $('ul.nav.navbar-nav .active > a').attr('href')
    $('ul.side-nav .active').removeClass('active')
    $('.side-nav a[href="' + sectionName + '"]').parent('li').addClass('active')


  # Add smooth scrolling on all links inside the navbar
  $('ul.nav > li, a.navbar-brand').on 'click', (event) ->
    $('.navigation ul.nav').collapse('hide')
    @hash = $(this).children('a').attr('href') || 'home'
    if @hash != ''
      # Prevent default anchor click behavior
      event.preventDefault()
      # Store hash
      hash = @hash

      # additional padding for small screens
      if ($(document).width() < 992)
        addPadding = 56
        scroll = 0
      else
        scroll = 800
        addPadding = 0

      # Using jQuery's animate() method to add smooth page scroll
      # The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate { scrollTop: $(hash).offset().top - addPadding }, scroll, ->
        # Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash

        return
    return
  return
