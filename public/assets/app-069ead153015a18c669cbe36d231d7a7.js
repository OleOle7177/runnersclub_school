(function() {
  var init, myMap, myPlacemark;

  init = function() {
    var myMap, myPlacemark;
    myMap = new ymaps.Map('map', {
      center: [55.066408, 82.926520],
      controls: ['smallMapDefaultSet'],
      zoom: 15
    });
    myPlacemark = new ymaps.Placemark([55.066408, 82.926520], {
      hintContent: 'Стадион СГУПС',
      balloonContent: 'Стадион СГУПС, ул. Залесского д.3'
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
  };

  ymaps.ready(init);

  myMap = void 0;

  myPlacemark = void 0;

}).call(this);
(function() {
  $(document).ready(function() {
    $('body').scrollspy({
      target: '#scroll'
    });
    $('#scroll').on('activate.bs.scrollspy', function(event) {
      var sectionName;
      sectionName = $('ul.nav.navbar-nav .active > a').attr('href');
      $('ul.side-nav .active').removeClass('active');
      return $('.side-nav a[href="' + sectionName + '"]').parent('li').addClass('active');
    });
    $('ul.nav > li, a.navbar-brand').on('click', function(event) {
      var hash;
      $('.navigation ul.nav').collapse('hide');
      this.hash = $(this).children('a').attr('href') || 'home';
      if (this.hash !== '') {
        event.preventDefault();
        hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
          window.location.hash = hash;
        });
      }
    });
  });

}).call(this);
window.onload = function() {

  var placeholders = document.getElementsByClassName('placeholder image'),
      smallImages = document.getElementsByClassName('img-small'),
      videos = document.getElementsByClassName('placeholder video')

  // 1: load small image and show it
  const smallImagesLength = smallImages.length;
  for (var i = 0; i < smallImagesLength; i++ ) {
    loadSmallImages(i);
  };

  // 2: load videos
  var videosLength = videos.length;
  for (var i = 0; i < videosLength; i++ ) {
    loadVideos(i);
  }

  // 3: load large image
  const placeholdersLength = placeholders.length;
  for (var i = 0; i < placeholdersLength; i++ ) {
    loadLargeImages(i);
  }


  function loadSmallImages(i) {
    var smallImage = smallImages[i];
    var img = new Image();

    img.src = smallImage.src;
    img.onload = function () {
      smallImage.classList.add('loaded');
    };
  }

  function loadLargeImages(i) {
    var placeholder = placeholders[i];

    var imgLarge = new Image();
    imgLarge.src = placeholder.dataset.large;
    imgLarge.onload = function () {
      imgLarge.classList.add('loaded');
      imgLarge.classList.add('img-responsive');    
    }
    placeholder.appendChild(imgLarge);
  }

  function loadVideos(i) {
    var video = videos[i];

    var videoLarge =  document.createElement('video');
    videoLarge.src = video.dataset.large;
    videoLarge.autoplay = true;
    videoLarge.loop = true;

    videoLarge.onloadeddata = function () {
      videoLarge.classList.add('loaded');
    }
    video.appendChild(videoLarge);
  }
}
;
